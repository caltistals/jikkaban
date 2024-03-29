# JIKKABAN

## 何を作っている？

家族内の晩御飯のスケジュールと宅急便の荷物を管理できるアプリケーション、家族内掲示板のようなイメージ

今後はこの 2 つ以外にも機能を追加し、統合的なツールを目指したい

**現状は晩御飯の予定を管理する機能のみ実装済み**

## きっかけ

私の実家では母が晩御飯を作ってくれている（ありがとう）。そのため、母は家族の晩御飯が必要かどうかを把握する必要がある。
現状では、LINE でその情報の共有を行っている。しかし、専用のものではないため情報の把握が難しいといった問題がある（その日の予定をすぐに把握できない等）。

これに加え、家族の宅急便の荷物の把握できていないため、荷物を受け取ることができず、結果配達員の方にご迷惑をおかけしてしまうという問題もある。

これら 2 つの問題を解決するため、このアプリケーションを開発するに至った。

## 使っている技術

- React
- TypeScript
- Mantine
- Firebase
- Cloud Firestore

## 現在の機能イメージ

- ユーザーは 1 つのグループに所属する
- グループはユーザー登録時に新たに作成するか既存のグループに参加するかを選択可能
- ユーザーは晩御飯の予定を登録することが出来る
- ユーザーは同じグループのユーザーの晩御飯の予定を確認することが出来る

## 今後実装したい機能

- [ ] 荷物管理機能
