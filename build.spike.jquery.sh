exit_on_error() {
    exit_code=$1
    last_command=${@:2}
    if [ $exit_code -ne 0 ]; then
        >&2 echo "\"${last_command}\" command failed with exit code ${exit_code}."
        exit $exit_code
    fi
}

cp -r ./spike/js/renovation/spike/ ./devextreme-renovated/js/renovation/spike/

cd ./devextreme
npm i
npm run build:dev
exit_on_error $? !!

cd ../devextreme-renovated
# npm i
# npm run build:r:dev && log 1 SUCCESS 'devextreme-renovated build:r:dev' || log 1 ERROR 'devextreme-renovated build:r:dev'
exit_on_error $? !!

cd ..
npm run build:jquery
exit_on_error $? !!

