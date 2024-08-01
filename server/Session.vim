let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Projects/react/todo-app/server
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ~/Projects/react/todo-app/server
badd +6 app/controllers/foo_controller.go
badd +76 app/controllers/server.go
badd +34 app/controllers/auth_controller.go
badd +136 term://~/Projects/react/todo-app/server//39955:/bin/zsh
badd +3 .env
badd +9 app/controllers/routes.go
badd +1 go.mod
badd +11 main.go
badd +0 term://~/Projects/react/todo-app/server//44709:/bin/zsh
badd +1 app/middlewares/authMiddleware.go
badd +20 app/middlewares/corsMiddleware.go
badd +0 app/models/user.go
badd +6 app/models/registry.go
argglobal
%argdel
$argadd ~/Projects/react/todo-app/server
edit app/models/registry.go
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 41 + 42) / 84)
exe 'vert 1resize ' . ((&columns * 94 + 141) / 283)
exe '2resize ' . ((&lines * 40 + 42) / 84)
exe 'vert 2resize ' . ((&columns * 94 + 141) / 283)
exe '3resize ' . ((&lines * 40 + 42) / 84)
exe 'vert 3resize ' . ((&columns * 69 + 141) / 283)
exe '4resize ' . ((&lines * 41 + 42) / 84)
exe 'vert 4resize ' . ((&columns * 69 + 141) / 283)
exe '5resize ' . ((&lines * 41 + 42) / 84)
exe 'vert 5resize ' . ((&columns * 118 + 141) / 283)
exe '6resize ' . ((&lines * 40 + 42) / 84)
exe 'vert 6resize ' . ((&columns * 118 + 141) / 283)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 5 - ((4 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/server/app/controllers/server.go", ":p")) | buffer ~/Projects/react/todo-app/server/app/controllers/server.go | else | edit ~/Projects/react/todo-app/server/app/controllers/server.go | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/server/app/controllers/server.go
endif
balt ~/Projects/react/todo-app/server/app/controllers/routes.go
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 74 - ((31 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 74
normal! 047|
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/server/app/models/user.go", ":p")) | buffer ~/Projects/react/todo-app/server/app/models/user.go | else | edit ~/Projects/react/todo-app/server/app/models/user.go | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/server/app/models/user.go
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 11 - ((10 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 11
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/server/app/controllers/server.go", ":p")) | buffer ~/Projects/react/todo-app/server/app/controllers/server.go | else | edit ~/Projects/react/todo-app/server/app/controllers/server.go | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/server/app/controllers/server.go
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 8 - ((7 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("term://~/Projects/react/todo-app/server//39955:/bin/zsh", ":p")) | buffer term://~/Projects/react/todo-app/server//39955:/bin/zsh | else | edit term://~/Projects/react/todo-app/server//39955:/bin/zsh | endif
if &buftype ==# 'terminal'
  silent file term://~/Projects/react/todo-app/server//39955:/bin/zsh
endif
balt ~/Projects/react/todo-app/server/app/controllers/foo_controller.go
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 191 - ((40 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 191
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("term://~/Projects/react/todo-app/server//44709:/bin/zsh", ":p")) | buffer term://~/Projects/react/todo-app/server//44709:/bin/zsh | else | edit term://~/Projects/react/todo-app/server//44709:/bin/zsh | endif
if &buftype ==# 'terminal'
  silent file term://~/Projects/react/todo-app/server//44709:/bin/zsh
endif
balt term://~/Projects/react/todo-app/server//39955:/bin/zsh
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 49 - ((39 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 49
let s:c = 15 - ((2 * winwidth(0) + 59) / 118)
if s:c > 0
  exe 'normal! ' . s:c . '|zs' . 15 . '|'
else
  normal! 015|
endif
lcd ~/Projects/react/todo-app/server
wincmd w
exe '1resize ' . ((&lines * 41 + 42) / 84)
exe 'vert 1resize ' . ((&columns * 94 + 141) / 283)
exe '2resize ' . ((&lines * 40 + 42) / 84)
exe 'vert 2resize ' . ((&columns * 94 + 141) / 283)
exe '3resize ' . ((&lines * 40 + 42) / 84)
exe 'vert 3resize ' . ((&columns * 69 + 141) / 283)
exe '4resize ' . ((&lines * 41 + 42) / 84)
exe 'vert 4resize ' . ((&columns * 69 + 141) / 283)
exe '5resize ' . ((&lines * 41 + 42) / 84)
exe 'vert 5resize ' . ((&columns * 118 + 141) / 283)
exe '6resize ' . ((&lines * 40 + 42) / 84)
exe 'vert 6resize ' . ((&columns * 118 + 141) / 283)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
