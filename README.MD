# comment-to-args@v1
> Github Action for splitting comment into args
## 🔥 Usage
```yaml
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Split comment to args
        uses: tokopedia/captainmarvel/actions/comment-to-args@master
        id: split
        with:
          comment: github.event.comment.body

      - name: Some other action
        run: |
          echo ${{ steps.split.outputs.environment }}
          echo ${{ steps.split.outputs.data_center }}
          echo ${{ steps.split.outputs.tags }}
```

## ✨ Features
* 🧲 splitting a string by separator;
* 📎 setting a limit for the resulting array;
* 💎 simple API;

## 💡 Input

| property   | isRequired | default | comment                                                                                   | example
|------------|:----------:|:-------:|-------------------------------------------------------------------------------------------|:--------:
| `comment`   |      ✓     |         | comment to split                                                                          | github.event.comment.body


## 📦 Output

| property    | description                                      | example
|-------------|----------------------------------------------|---------
| `job` | job to run | build
| `environment` | environment to use | staging
| `data_center`    | data center being used                         | gcp
| `tags`    |                         | config
| `limit`    | ip address to limit                        | 172.xx

