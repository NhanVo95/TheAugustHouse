# The August

## Install PSReadLine for Windows Terminal Intellisense
```
Install-Module PSReadLine
Get-PSReadlineKeyHandler
```

```
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -HistoryNoDuplicates
Set-PSReadLineKeyHandler -Key Tab -Function Complete
```

## Work with git:
Viewing full version tree in git:
```
git log --pretty=oneline --graph --decorate --all
```

```
git config --local --add --bool push.autoSetupRemote true
```

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com
git push -u origin main
```

```
git branch develop
git checkout develop
```

```
git checkout -b feature/1-something
git push --set-upstream origin feature/1-something
git add .
git commit -m "#1 - something"
git push

git merge feature/1-something
git push -d origin feature/1-something
git branch -d feature/1-something
```

## API list:
V1:
/boards/:id - Get: Get board detail
/boards - POST: Add new board
/columns - POST: Add new column
/cards - POST: Add new card
