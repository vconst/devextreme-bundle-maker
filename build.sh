# Clone and build devextreme
git clone https://github.com/DevExpress/DevExtreme devextreme
cd ./DevExtreme && yarn && yarn build:r && yarn build:react && yarn build:vue && cd ..

# Clone and build react repos
git clone https://github.com/DevExpress/devextreme-react devextreme-react-renovated
sed -i '' 's/"devextreme"\:.*,/"devextreme": "file:..\/devextreme\/artifacts\/npm\/devextreme-renovation",/g' ./devextreme-react-renovated/package.json
git clone https://github.com/DevExpress/devextreme-react devextreme-react
cd ./devextreme-react && yarn && yarn build && node ./node_modules/gulp/bin/gulp npm.build && cd ..
cd ./devextreme-react-renovated && yarn && yarn build && node ./node_modules/gulp/bin/gulp npm.build && cd ..

# Clone and build vue repos
git clone https://github.com/DevExpress/devextreme-vue devextreme-vue-renovated
sed -i '' 's/"devextreme"\:.*,/"devextreme": "file:..\/devextreme\/artifacts\/npm\/devextreme-renovation",/g' ./devextreme-vue-renovated/package.json
git clone https://github.com/DevExpress/devextreme-vue devextreme-vue
cd ./devextreme-vue && yarn && yarn build && node ./node_modules/gulp/bin/gulp npm.build && cd ..
cd ./devextreme-vue-renovated && yarn && yarn build && node ./node_modules/gulp/bin/gulp npm.build && cd ..

mkdir ./bundles
mkdir ./bundles/react
mkdir ./bundles/vue
mkdir ./bundles/angular
mkdir ./bundles/jquery
