let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Projects/react/todo-app/client
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ~/Projects/react/todo-app/client
badd +48 term://~/Projects/react/todo-app/client//74433:/bin/zsh
badd +22 term://~/Projects/react/todo-app/client//74481:/bin/zsh
badd +10 src/Layout.tsx
badd +25 src/components/Navbar.tsx
badd +6 src/App.tsx
badd +6 src/index.css
badd +31 term://~/Projects/react/todo-app/client//75219:/bin/zsh
badd +5 tailwind.config.js
badd +7 src/App.css
badd +6 src/components/Search.tsx
badd +47 src/components/Sidebar.tsx
badd +11 src/RouteHandler.tsx
badd +3 src/components/Dashboard.tsx
badd +2 src/components/Project.tsx
badd +10 src/main.tsx
argglobal
%argdel
$argadd ~/Projects/react/todo-app/client
edit src/components/Sidebar.tsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
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
exe 'vert 1resize ' . ((&columns * 93 + 140) / 281)
exe '2resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 2resize ' . ((&columns * 93 + 140) / 281)
exe '3resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 3resize ' . ((&columns * 93 + 140) / 281)
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
let s:l = 48 - ((44 * winheight(0) + 39) / 79)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 48
normal! 029|
lcd ~/Projects/react/todo-app/client
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/client/src/Layout.tsx", ":p")) | buffer ~/Projects/react/todo-app/client/src/Layout.tsx | else | edit ~/Projects/react/todo-app/client/src/Layout.tsx | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/client/src/Layout.tsx
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
let s:l = 13 - ((12 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 13
normal! 0
lcd ~/Projects/react/todo-app/client
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/client/src/RouteHandler.tsx", ":p")) | buffer ~/Projects/react/todo-app/client/src/RouteHandler.tsx | else | edit ~/Projects/react/todo-app/client/src/RouteHandler.tsx | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/client/src/RouteHandler.tsx
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
let s:l = 11 - ((10 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 11
normal! 024|
lcd ~/Projects/react/todo-app/client
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/client/src/main.tsx", ":p")) | buffer ~/Projects/react/todo-app/client/src/main.tsx | else | edit ~/Projects/react/todo-app/client/src/main.tsx | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/client/src/main.tsx
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
let s:l = 10 - ((9 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 10
normal! 02|
lcd ~/Projects/react/todo-app/client
wincmd w
argglobal
if bufexists(fnamemodify("~/Projects/react/todo-app/client/src/index.css", ":p")) | buffer ~/Projects/react/todo-app/client/src/index.css | else | edit ~/Projects/react/todo-app/client/src/index.css | endif
if &buftype ==# 'terminal'
  silent file ~/Projects/react/todo-app/client/src/index.css
endif
balt ~/Projects/react/todo-app/client/src/main.tsx
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
let s:l = 8 - ((7 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 0
lcd ~/Projects/react/todo-app/client
wincmd w
5wincmd w
exe 'vert 1resize ' . ((&columns * 93 + 140) / 281)
exe '2resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 2resize ' . ((&columns * 93 + 140) / 281)
exe '3resize ' . ((&lines * 39 + 40) / 81)
exe 'vert 3resize ' . ((&columns * 93 + 140) / 281)
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
