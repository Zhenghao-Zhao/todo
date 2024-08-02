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
badd +593 term://~/Projects/react/todo-app/server//2301:/bin/zsh
badd +9 app/controllers/auth_controller.go
badd +21 app/utils/auth.go
badd +25 app/controllers/utils.go
badd +4 main.go
badd +53 app/controllers/server.go
badd +6 app/models/registry.go
badd +180 term://~/Projects/react/todo-app/server//3320:/bin/zsh
badd +23 app/models/user.go
badd +6 app/middlewares/corsMiddleware.go
badd +1 app/middlewares/authMiddleware.go
badd +8 .env
argglobal
%argdel
$argadd ~/Projects/react/todo-app/server
edit main.go
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
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
exe '1resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 1resize ' . ((&columns * 93 + 140) / 281)
exe '2resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 2resize ' . ((&columns * 93 + 140) / 281)
exe '3resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 3resize ' . ((&columns * 187 + 140) / 281)
exe '4resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 4resize ' . ((&columns * 93 + 140) / 281)
exe '5resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 5resize ' . ((&columns * 93 + 140) / 281)
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
let s:l = 7 - ((6 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 7
normal! 05|
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/server/app/controllers/server.go", ":p")) | buffer ~/Projects/react/todo-app/server/app/controllers/server.go | else | edit ~/Projects/react/todo-app/server/app/controllers/server.go | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/server/app/controllers/server.go
endif
balt ~/Projects/react/todo-app/server/main.go
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
let s:l = 45 - ((12 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 45
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/server/app/utils/auth.go", ":p")) | buffer ~/Projects/react/todo-app/server/app/utils/auth.go | else | edit ~/Projects/react/todo-app/server/app/utils/auth.go | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/server/app/utils/auth.go
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
let s:l = 33 - ((32 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 33
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("term://~/Projects/react/todo-app/server//2301:/bin/zsh", ":p")) | buffer term://~/Projects/react/todo-app/server//2301:/bin/zsh | else | edit term://~/Projects/react/todo-app/server//2301:/bin/zsh | endif
if &buftype ==# 'terminal'
  silent file term://~/Projects/react/todo-app/server//2301:/bin/zsh
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 717 - ((38 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 717
normal! 0
lcd ~/Projects/react/todo-app/server
wincmd w
argglobal
if bufexists(fnamemodify("term://~/Projects/react/todo-app/server//3320:/bin/zsh", ":p")) | buffer term://~/Projects/react/todo-app/server//3320:/bin/zsh | else | edit term://~/Projects/react/todo-app/server//3320:/bin/zsh | endif
if &buftype ==# 'terminal'
  silent file term://~/Projects/react/todo-app/server//3320:/bin/zsh
endif
balt term://~/Projects/react/todo-app/server//2301:/bin/zsh
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 186 - ((38 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 186
normal! 015|
lcd ~/Projects/react/todo-app/server
wincmd w
3wincmd w
exe '1resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 1resize ' . ((&columns * 93 + 140) / 281)
exe '2resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 2resize ' . ((&columns * 93 + 140) / 281)
exe '3resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 3resize ' . ((&columns * 187 + 140) / 281)
exe '4resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 4resize ' . ((&columns * 93 + 140) / 281)
exe '5resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 5resize ' . ((&columns * 93 + 140) / 281)
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
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
