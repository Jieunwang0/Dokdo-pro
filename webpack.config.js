module.exports = {
  entry: {
    dev: './src/index.tsx',
  },
  output: {
    filename: './build/index.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      // Typescript
      { test: /\.tsx?$/, loader: 'ts-loader' },
      
      // 이미지 로더 추가
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]', // 이미지가 빌드된 후 저장될 경로 및 파일 이름 설정
        },
      },
    ],
  },
};