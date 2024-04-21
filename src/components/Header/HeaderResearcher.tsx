import { searchMenuOptions } from '@/data/constants'
import { IPost } from '@/lib/types/post'
import useDebounce from '@/utils/useDebounce'
import HeaderDefault from '@components/Header/HeaderDefault'
import { useResearcher } from '@contexts/ResearcherContext'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  InputAdornment,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
} from '@mui/material'
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'

const HeaderResearcher = () => {
  const [search, setSearch] = useState<string>()
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

  const anchorRef = useRef<HTMLDivElement>(null)

  const { filterPosts, setFilterPosts } = useResearcher()
  const debouncedSearch = useDebounce(search)

  const handleToggle = () => setOpen((prevOpen) => !prevOpen)

  const handleClose = (event: Event) => {
    if (anchorRef.current?.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleOrderByFilter = (
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

  const handleSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target?.value)
  }

  useEffect(() => {
    setFilterPosts({ ...filterPosts, search: debouncedSearch })
  }, [debouncedSearch, filterPosts, setFilterPosts])

  return (
    <HeaderDefault>
      <div className="flex">
        <ButtonGroup ref={anchorRef}>
          <Button
            variant="contained"
            onClick={handleToggle}
            color="info"
            className="order-by-menu mr-4 w-[40px] border border-solid border-[#dddddd] px-1 shadow-none hover:bg-[#fbfbfb] hover:shadow-none"
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
                        onClick={(event) => handleOrderByFilter(event, index)}
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
          className="filter-by-text w-[300px] bg-[#f0f0f0]"
          value={search}
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
