unmap <Space>

exmap reload obcommand app:reload
exmap file_save obcommand editor:save-file
exmap file_rename obcommand workspace:edit-file-title
exmap daily_note obcommand daily-notes

exmap create_inbox_item obcommand quickadd:choice:095bf103-3abf-4f22-8713-a88cbc0af1c0 
exmap create_waiting_task obcommand quickadd:choice:8aae7307-dfc8-4572-8b41-1d2581d8f74a
exmap create_project obcommand quickadd:choice:b9ab3a9a-90d1-43be-b659-6347cd136d63
exmap create_note obcommand file-explorer:new-file

exmap window_close obcommand workspace:close-tab-group
exmap window_reopen obcommand workspace:undo-close-pane

exmap window_focus_left obcommand editor:focus-left
exmap window_focus_bottom obcommand editor:focus-bottom
exmap window_focus_top obcommand editor:focus-top
exmap window_focus_right obcommand editor:focus-right

exmap window_split_horizontal obcommand workspace:split-horizontal
exmap window_split_vertical obcommand workspace:split-vertical

exmap buffer_close obcommand workspace:close

exmap find_file obcommand switcher:open 

exmap global_search obcommand global-search:open 
exmap file_search obcommand editor:open-search

nmap <Space>fs :file_save
nmap <Space>fr :file_rename
nmap <Space>ff :find_file

nmap <Space>R :reload

nmap <Space>w- :window_split_horizontal
nmap <Space>w/ :window_split_vertical
nmap <Space>wh :window_focus_left 
nmap <Space>wj :window_focus_bottom
nmap <Space>wk :window_focus_top 
nmap <Space>wl :window_focus_right
nmap <Space>wd :window_close
nmap <Space>wr :window_reopen

nmap <Space>bd :buffer_close

nmap <Space>d :daily_note

nmap <Space>cn :create_note
nmap <Space>ci :create_inbox_item
nmap <Space>cp :create_project
nmap <Space>cw :create_waiting_task

nmap <Space>sf :global_search
nmap <Space>ss :file_search
