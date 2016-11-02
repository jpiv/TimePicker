au VimEnter * NERDTree

set tabstop=2
set shiftwidth=2
set expandtab
set number

hi MatchParen cterm=none ctermbg=magenta ctermfg=white

nnoremap U <C-r>
nnoremap <C-n> :NERDTreeToggle<CR>
nnoremap <C-r> :ConqueTermSplit bash<CR>
nnoremap qq <C-w>h
nnoremap 22 <C-w>k
nnoremap ee <C-w>l
nnoremap ss <C-w>j

set splitright

set nocompatible              " be iMproved, required
filetype off                  " required

 "set the runtime path to include Vundle and initialize
 set rtp+=~/.vim/bundle/Vundle.vim
 call vundle#begin()
 " alternatively, pass a path where Vundle should install plugins
 "call vundle#begin('~/some/path/here')

 " let Vundle manage Vundle, required
 Plugin 'VundleVim/Vundle.vim'

 Plugin 'scrooloose/nerdtree'
 Plugin 'wesQ3/vim-windowswap'
 Plugin 'jelera/vim-javascript-syntax'

 " All of your Plugins must be added before the following line
 call vundle#end()            " required
 filetype plugin indent on    " required
 " To ignore plugin indent changes, instead use:
 "filetype plugin on
 "
 " Brief help
 " :PluginList       - lists configured plugins
 " :PluginInstall    - installs plugins; append `!` to update or just
" :PluginUpdate
 " :PluginSearch foo - searches for foo; append `!` to refresh local cache
 " :PluginClean      - confirms removal of unused plugins; append `!` to
 "auto-approve removal
 "
 " see :h vundle for more details or wiki for FAQ
 " Put your non-Plugin stuff after this line
