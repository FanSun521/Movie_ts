该文件夹下的其他文件包含了Redux的reducer函数，用于处理不同的action类型并更新store中的state。这些reducer函数被组合在一起，形成了一个root reducer，作为Redux应用程序的入口点。此README.md文件提供了有关这些reducer函数的详细信息，以及如何使用它们来更新应用程序的状态。

该文件夹下的其他文件包含了Redux的reducer函数，用于处理不同的action类型并更新store中的state。这些reducer函数被组合在一起，形成了一个root reducer，作为Redux应用程序的入口点。此README.md文件提供了有关这些reducer函数的详细信息，以及如何使用它们来更新应用程序的状态。

- `authReducer.ts`: 处理与用户身份验证相关的action类型，例如登录和注销。暴露出的接口包括`authReducer`函数。
- `errorReducer.ts`: 处理与错误相关的action类型，例如请求错误和验证错误。暴露出的接口包括`errorReducer`函数。
- `movieReducer.ts`: 处理与电影相关的action类型，例如获取电影列表和添加电影。暴露出的接口包括`movieReducer`函数。
- `index.ts`: 将所有reducer函数组合在一起，形成一个root reducer。暴露出的接口包括`rootReducer`函数。

这些reducer函数的作用是根据不同的action类型更新Redux store中的state。通过使用`combineReducers`函数将它们组合在一起，可以创建一个root reducer，它将处理所有的action类型并更新整个应用程序的状态。

