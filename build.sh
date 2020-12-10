clone_and_build_repo()
{
    REPO=$1$2

    if [ ! -d "./"$REPO ];
    then
        git clone https://github.com/DevExpress/$1 $REPO &&
            log 3 SUCCESS 'clone '$REPO ||
            log 3 ERROR 'clone '$REPO
    fi

    cd ./$REPO && log 3 SUCCESS 'go to '$REPO

    [ -f "./strategy/vue2/package-lock.json" ] && rm ./strategy/vue2/package-lock.json
    git pull && log 2 SUCCESS 'git pull' || log 2 ERROR 'git pull'

    $SUDO npm i ../devextreme$2/artifacts/npm/devextreme$3 &&
        log 3 SUCCESS 'update path to devextreme in '$REPO ||
        log 3 ERROR 'update path to devextreme in '$REPO

    $SUDO npm i devextreme-internal-tools@latest &&
        log 3 SUCCESS 'update internal tools in '$REPO ||
        log 3 ERROR 'update internal tools in '$REPO

    $SUDO npm i && log 3 SUCCESS 'install packages' || log 3 ERROR 'install packages'

    $SUDO npm run update-integration-meta --  --js-scripts ../devextreme/js &&
        log 3 SUCCESS 'update meta data' ||
        log 3 ERROR 'update meta data'

    $SUDO npm run build && log 3 SUCCESS 'build' || log 3 ERROR 'build'

    $SUDO npm run pack &&
        log 3 SUCCESS 'pack' ||
        log 3 ERROR 'pack'

    cd .. && log 3 SUCCESS 'go away from '$REPO
}

process_repo()
{
    APPROACH=$1
    REPO_NAME=devextreme-$APPROACH

    log 2 START 'clone and build '$REPO_NAME
    clone_and_build_repo $REPO_NAME
    log 2 END 'clone and build '$REPO_NAME

    log 2 START 'clone and build '$REPO_NAME-renovated
    clone_and_build_repo $REPO_NAME -renovated -renovation
    log 2 END 'clone and build '$REPO_NAME-renovated
}

build_devextreme()
{
    cd devextreme && log 2 SUCCESS 'go to ./devextreme'
    git pull && log 2 SUCCESS 'git pull' || log 2 ERROR 'git pull'

    $SUDO npm i && log 2 SUCCESS 'install packages' || log 2 ERROR 'install packages'
    $SUDO npm run build && log 2 SUCCESS 'build jquery' || log 2 ERROR 'build jquery'

    cd ../devextreme-renovated && log 2 SUCCESS 'go to ./devextreme-renovated'
    git pull && log 2 SUCCESS 'git pull' || log 2 ERROR 'git pull'

    $SUDO npm i && log 2 SUCCESS 'install packages' || log 2 ERROR 'install packages'
    $SUDO npm run build:r && log 2 SUCCESS 'build jquery' || log 2 ERROR 'build jquery renovation'
    $SUDO npm run build:react && log 2 SUCCESS 'build react' || log 2 ERROR 'build react'
    $SUDO npm run build:vue && log 2 SUCCESS 'build vue' || log 2 ERROR 'build vue'
    $SUDO npm run build:angular && log 2 SUCCESS 'build angular' || log 2 ERROR 'build angular'

    cd .. && log 2 SUCCESS 'go away from ./devextreme-renovated'
}

log() 
{
    LVL=$1
    TYPE=$2
    TABS=''
    MESSAGE=$3

    for level in `seq 1 $LVL`
    do
        TABS=$TABS'--'
    done

    $SUDO echo $TABS\> $TYPE':' $MESSAGE >> $LOG_FILE
}

# Use sudo on unix OS
SUDO=""
SCRIPT_SUFF=""
if [ $# -ne 0 ];
then
    SUDO='sudo'
    SCRIPT_SUFF=':unix'
fi

# Remember log file absolute path
LOG_FILE=$(pwd)/build_repos.log

# Clear node_modules to aboid problems with Angular building
[ -f "./node_modules" ] && rm -r node_modules &&
    log 1 SUCCESS 'node_modules removed'

# Clear bundles dir
[ -d "./bundles" ] && $SUDO rm -r bundles

# Clear log file
$SUDO echo '' > $LOG_FILE

# Clone and build devextreme
if [ ! -d "./devextreme" ];
then
    git clone https://github.com/DevExpress/DevExtreme devextreme &&
        log 1 SUCCESS 'devextreme cloned' ||
        log 1 ERROR 'devextreme cloned'
fi

if [ ! -d "./devextreme-renovated" ];
then
    git clone https://github.com/DevExpress/DevExtreme devextreme-renovated &&
        log 1 SUCCESS 'devextreme cloned' ||
        log 1 ERROR 'devextreme cloned'
fi

log 1 START 'devextreme build'
build_devextreme
log 1 END 'devextreme build'

# Clone and build another repos
echo '' >> $LOG_FILE
log 1 START 'process react repo'
process_repo react
log 1 END 'process react repo'
log 1 START 'process vue repo'
process_repo vue
log 1 END 'process vue repo'
log 1 START 'process angular repo'
process_repo angular
log 1 END 'process angular repo'

npm i &&
    log 1 SUCCESS 'packages installed'

# Create directories for bundles
echo '' >> $LOG_FILE
mkdir ./bundles &&
    log 1 SUCCESS 'create bundles dir' ||
    log 1 ERROR 'create bundles dir'
mkdir ./bundles/jquery &&
    log 1 SUCCESS 'create bundles/jquery dir' ||
    log 1 ERROR 'create bundles/jquery dir'
mkdir ./bundles/react &&
    log 1 SUCCESS 'create bundles/react dir' ||
    log 1 ERROR 'create bundles/react dir'
mkdir ./bundles/vue &&
    log 1 SUCCESS 'create bundles/vue dir' ||
    log 1 ERROR 'create bundles/vue dir'
mkdir ./bundles/angular &&
    log 1 SUCCESS 'create bundles/angular dir' ||
    log 1 ERROR 'create bundles/angular dir'

# Create all bundles
echo '' >> $LOG_FILE

$SUDO npm run build:jquery$SCRIPT_SUFF && log 1 SUCCESS 'build jquery bundle' || log 1 ERROR 'build jquery bundle'
$SUDO npm run build:react$SCRIPT_SUFF && log 1 SUCCESS 'build react bundle' || log 1 ERROR 'build react bundle'
$SUDO npm run build:vue$SCRIPT_SUFF && log 1 SUCCESS 'build vue bundle' || log 1 ERROR 'build vue bundle'
$SUDO npm run build:angular$SCRIPT_SUFF && log 1 SUCCESS 'build angular bundle' || log 1 ERROR 'build angular bundle'

# Copy Vue and Angular bundle to playground
echo '' >> $LOG_FILE
$SUDO cp ./bundles/vue/*.js ./playground/vue-app/src/components/ &&
    log 1 SUCCESS 'vue bundles copies to playground' ||
    log 1 ERROR 'vue bundles copies to playground'
$SUDO cp ./bundles/angular/*.js ./playground/angular-app/src/app/ &&
    log 1 SUCCESS 'angular bundles copies to playground' ||
    log 1 ERROR 'angular bundles copies to playground'