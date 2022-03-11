
## Generate Command
### Service
```
ionic g service folder_name/file_name
```
### Component
```
ionic g component folder_name/file_name
```

## Run On Android
```
ionic cap run android -l --external
```

## Run On iOS
```
ionic cap run ios -l --external
```

## Fix iOS white screen
```
In file tsconfing.json, under compilerOptions change "target": "2015" to "target": "es5"
```

## I18N Angular
### 1. Installtion
```
npm install @ngx-translate/core @ngx-translate/http-loader --save
```
### 2. Import in AppModule
```
TranslateModule.forRoot()
```

### 3. Import in Pages
```
TranslateModule.forChild()
```