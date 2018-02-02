const withTypeScript = require('@zeit/next-typescript')

module.exports = withTypeScript()

// module.exports = {
//   webpack: (config, options) => {

//     const { buildId, dev, isServer, defaultLoaders } = options;

//     // Perform customizations to webpack config

//     config.resolve.extensions = [".ts", ".tsx", ".js", ".json"];

//     config.module.rules.push({
//       test: /\.+(ts|tsx)$/,
//       loader: 'ts-loader',
//       options: {
//         transpileOnly: true
//       }
//     })

//     // Important: return the modified config
//     return config
//   },
//   webpackDevMiddleware: config => {
//     // Perform customizations to webpack dev middleware config

//     // Important: return the modified config
//     return config
//   }
// }
