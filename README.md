# NgDemo

项目基于 [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3。

## 开发模式

运行 `ng serve` 启动本地服务，启动后打开 `http://localhost:4200/` 查看页面。

## 代码生成

使用 `ng generate component component-name` 生成一个新的组件。

其他命令： `ng generate directive|pipe|service|class|guard|interface|enum|module`

## 打包发布

运行 `ng build` 进行打包。 打包后的代码在 `dist/` 目录下. 正式环境使用 `--prod` 参数。

## mock接口

使用`json-server`，需要先全局安装：`npm i -g json-server`

```bash
json-server ./src/app/todo/todo.data.json
```
