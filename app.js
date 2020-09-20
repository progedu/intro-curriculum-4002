var createError = require('http-errors');//httpのエラーを処理しやすくする
var express = require('express');//エスくプレスの機能を使えるようにする
var path = require('path');//URL解析、サーバー内のパスの処理をしやすく。ファイル名を名前と拡張子に分ける
var cookieParser = require('cookie-parser');//クッキーをパース（分解して使いやすくする）
var logger = require('morgan');//ログに関連
var helmet = require('helmet');//セキュリティー関連

// これは、 routes ディレクトリの中にある Router オブジェクトのモジュールをそれぞれ読み込んでいます。
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var photosRouter = require('./routes/photos');//新しいページ作ったら追加


var app = express();//Application オブジェクトを express のモジュールを利用して作成し、 app という変数に格納
app.use(helmet());//ヘルメットモジュールを使えるように

// view engine 
// Application オブジェクトの set 関数 を 利用して、 Application の設定を行っています。
//ここでは、 テンプレートのファイルが views ディレクトリにあることと、 テンプレートエンジンが pug であることを設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));//ロガーの設定。今回開発環境devと固定している
app.use(express.json());//クライアントからポストで送られてきた情報をJSON形式で使えるように
app.use(express.urlencoded({ extended: false }));//URLエンコードされたポストデータを処理
app.use(cookieParser());//クッキーの設定
app.use(express.static(path.join(__dirname, 'public')));//publicフォルダの設定

app.use('/', indexRouter);//指定なしはインデックスルーターへ
app.use('/users', usersRouter);//usersならユーザーズルーターへ
app.use('/photos', photosRouter);//新しいページ作ったらここにも追加

// catch 404 and forward to error handler　上までの処理に当てはまらなかったら次のハンドラーに↓404エラー出す
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};//開発環境ならエラーメッセージ出す、本番なら出さない

  // render the error page
  res.status(err.status || 500);
  res.render('error');//エラーパグを返す
});

module.exports = app;//これ消しちゃうと動かないから注意
