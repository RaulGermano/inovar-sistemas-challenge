import { searchMenuOptions } from '@/data/constants'
import { IPost } from '@/lib/types/post'
import { useResearcher } from '@contexts/ResearcherContext'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import TextField from '@mui/material/TextField'
import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import HeaderDefault from './HeaderDefault'

const HeaderResearcher = () => {
  const { filterPosts, setFilterPosts } = useResearcher()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleMenuItemClick = (
    _event: MouseEvent<HTMLLIElement>,
    index: number,
  ) => {
    // DOC: Updating orderBy value state by searchMenuOptions index
    setFilterPosts({
      ...filterPosts,
      orderBy: searchMenuOptions[index].key as keyof IPost,
    })
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => setOpen((prevOpen) => !prevOpen)

  const handleClose = (event: Event) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterPosts({
      ...filterPosts,
      search: event.target?.value,
    })
  }

  return (
    <HeaderDefault>
      <div className="flex">
        <ButtonGroup ref={anchorRef}>
          <Button
            variant="contained"
            onClick={handleToggle}
            color="info"
            className="mr-4 w-[40px] border border-solid border-[#dddddd] px-1 shadow-none hover:bg-[#fbfbfb] hover:shadow-none"
          >
            <MenuIcon color="action" />
          </Button>
        </ButtonGroup>

        <Popper
          className="mt-3"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement="bottom-start"
          style={{ zIndex: 1 }}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 10],
              },
            },
          ]}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {searchMenuOptions.map(({ value, disabled }, index) => (
                      <MenuItem
                        key={index}
                        disabled={disabled}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {value}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <TextField
          type="search"
          variant="outlined"
          fullWidth
          size="small"
          className="w-[300px] bg-[#f0f0f0]"
          onChange={handleSearchFilter}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </HeaderDefault>
  )
}

export default HeaderResearcher
