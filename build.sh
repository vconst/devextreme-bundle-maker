update_meta()
{
    $SUDO npm run update-integration-meta --  --js-scripts ../devextreme/js &&
        log 3 1 SUCCESS 'update meta data' ||
        log 3 1 ERROR 'update meta data'
}

build()
{
    cd ./$1 && log 3 1 SUCCESS 'go to '$1
    $SUDO npm i && log 3 1 SUCCESS 'install packages' || log 2 1 ERROR 'install packages'

    if echo "$1" | grep -q "renovated"; 
    then
        update_meta
    fi

    if echo "$1" | grep -q "angular"; 
    then
        $SUDO node ./node_modules/gulp/bin/gulp build.components --max-old-space-size=4096 &&
            log 3 1 SUCCESS 'build' ||
            log 3 1 ERROR 'build'
    else
        $SUDO npm run build && log 3 1 SUCCESS 'build' || log 3 1 ERROR 'build'
        $SUDO node ./node_modules/gulp/bin/gulp npm.build --max-old-space-size=4096 &&
            log 3 1 SUCCESS 'node gulp npm.build' ||
            log 3 1 ERROR 'node gulp npm.build'
    fi

    $SUDO npm run pack &&
        log 3 1 SUCCESS 'pack' ||
        log 3 1 ERROR 'pack'
    cd .. && log 3 0 SUCCESS 'go away from '$1
}

update_path_to_devextreme()
{
    $SUDO sed -i 's/"devextreme"\:.*,/"devextreme": "file:..\/devextreme\/artifacts\/npm\/devextreme-renovation",/g' ./$1/package.json
}

clone_and_build_repo()
{
    APPROACH=$1
    REPO=devextreme-$APPROACH
    RENOVATED_REPO=$REPO-renovated

    # Clone and build renovated repo
    git clone https://github.com/DevExpress/$REPO $RENOVATED_REPO &&
        log 2 0 SUCCESS 'clone '$RENOVATED_REPO ||
        log 2 0 ERROR 'clone '$RENOVATED_REPO

    update_path_to_devextreme $RENOVATED_REPO &&
        log 2 0 SUCCESS 'update path to devextreme in '$RENOVATED_REPO ||
        log 2 0 ERROR 'update path to devextreme in '$RENOVATED_REPO

    log 2 0 START 'update meta and build '$RENOVATED_REPO
    build $RENOVATED_REPO
    log 2 0 END 'update meta and build '$RENOVATED_REPO

    # Clone and build old repo
    git clone https://github.com/DevExpress/$REPO $REPO &&
        log 2 0 SUCCESS 'clone '$REPO ||
        log 2 0 ERROR 'clone '$REPO

    log 2 0 START 'update meta and build '$REPO
    build $REPO
    log 2 0 END 'update meta and build '$REPO
}

build_devextreme()
{
    cd devextreme && log 2 1 SUCCESS 'go to ./devextreme'

    $SUDO npm i && log 2 1 SUCCESS 'install packages' || log 2 1 ERROR 'install packages'
    $SUDO npm run build:r && log 2 1 SUCCESS 'build jquery' || log 2 1 ERROR 'build jquery'
    $SUDO npm run build:react && log 2 1 SUCCESS 'build react' || log 2 1 ERROR 'build react'
    $SUDO npm run build:vue && log 2 1 SUCCESS 'build vue' || log 2 1 ERROR 'build vue'
    $SUDO npm run build:angular && log 2 1 SUCCESS 'build angular' || log 2 1 ERROR 'build angular'
    cd .. && log 2 0 SUCCESS 'go away from ./devextreme'
}

log() 
{
    LVL=$1
    SUBDIR=$2
    TYPE=$3
    TABS=''
    PATH_PREF=''
    MESSAGE=$4

    for level in `seq 1 $LVL`
    do
        TABS=$TABS'--'
    done

    for level in `seq 1 $SUBDIR`
    do
        PATH_PREF=$PATH_PREF'../'
    done   

    $SUDO echo $TABS\> $TYPE':' $MESSAGE >> $PATH_PREF'build_repos.log'
}

# Use sudo on unix OS
SUDO=""
SCRIPT_SUFF=""
if [ $# -ne 0 ];
then
    SUDO='sudo'
    SCRIPT_SUFF=':unix'
fi

# Clear log file
$SUDO echo '' > build_repos.log

# Clone and build devextreme
git clone https://github.com/DevExpress/DevExtreme devextreme &&
    log 1 0 SUCCESS 'devextreme cloned' ||
    log 1 0 ERROR 'devextreme cloned'

log 1 0 START 'devextreme build'
build_devextreme
log 1 0 END 'devextreme build'

# Clone and build another repos
echo '' >> build_repos.log
log 1 0 START 'clone and build react repo'
clone_and_build_repo react
log 1 0 END 'clone and build react repo'
log 1 0 START 'clone and build vue repo'
clone_and_build_repo vue
log 1 0 END 'clone and build vue repo'
log 1 0 START 'clone and build angular repo'
clone_and_build_repo angular
log 1 0 END 'clone and build angular repo'

# Create directories for bundles
echo '' >> build_repos.log
mkdir ./bundles &&
    log 1 0 SUCCESS 'create bundles dir' ||
    log 1 0 ERROR 'create bundles dir'
mkdir ./bundles/jquery &&
    log 1 0 SUCCESS 'create bundles/jquery dir' ||
    log 1 0 ERROR 'create bundles/jquery dir'
mkdir ./bundles/react &&
    log 1 0 SUCCESS 'create bundles/react dir' ||
    log 1 0 ERROR 'create bundles/react dir'
mkdir ./bundles/vue &&
    log 1 0 SUCCESS 'create bundles/vue dir' ||
    log 1 0 ERROR 'create bundles/vue dir'
mkdir ./bundles/angular &&
    log 1 0 SUCCESS 'create bundles/angular dir' ||
    log 1 0 ERROR 'create bundles/angular dir'

# Create all bundles
echo '' >> build_repos.log

$SUDO npm run build:jquery$SCRIPT_SUFF && log 1 0 SUCCESS 'build jquery bundle' || log 1 0 ERROR 'build jquery bundle'
$SUDO npm run build:react$SCRIPT_SUFF && log 1 0 SUCCESS 'build react bundle' || log 1 0 ERROR 'build react bundle'
$SUDO npm run build:vue$SCRIPT_SUFF && log 1 0 SUCCESS 'build vue bundle' || log 1 0 ERROR 'build vue bundle'
$SUDO npm run build:angular$SCRIPT_SUFF && log 1 0 SUCCESS 'build angular bundle' || log 1 0 ERROR 'build angular bundle'

# Copy Vue and Angular bundle to playground
echo '' >> build_repos.log
$SUDO cp ./bundles/vue/*.js ./playground/vue-app/src/components/ &&
    log 1 0 SUCCESS 'vue bundles copies to playground' ||
    log 1 0 ERROR 'vue bundles copies to playground'
$SUDO cp ./bundles/angular/*.js ./playground/angular-app/src/app/ &&
    log 1 0 SUCCESS 'angular bundles copies to playground' ||
    log 1 0 ERROR 'angular bundles copies to playground'