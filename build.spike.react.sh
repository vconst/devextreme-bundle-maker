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

LOG_FILE=$(pwd)/build_spike.log

# Clear log file
$SUDO echo '' > $LOG_FILE

cp -r ./spike/js/renovation/spike/ ./devextreme-renovated/js/renovation/spike/ &&
    log 1 SUCCESS 'spike copied to devextreme-renovated' ||
    log 1 ERROR 'spike copied to devextreme-renovated'

cd ./devextreme-renovated
npm run build:react && log 1 SUCCESS 'devextreme-renovated build:react' || log 1 ERROR 'devextreme-renovated build:react'

cd ..
npm run build:react && log 1 SUCCESS 'build:react' || log 1 ERROR 'build:react'

cp ./bundles/vue/*.js ./playground/vue-app/src/components/ &&
    log 1 SUCCESS 'vue bundles copied to playground' ||
    log 1 ERROR 'vue bundles copied to playground'
cp ./bundles/angular/*.js ./playground/angular-app/src/app/ &&
    log 1 SUCCESS 'angular bundles copied to playground' ||
    log 1 ERROR 'angular bundles copied to playground'