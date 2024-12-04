import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  InputBase,
  Button,
  styled,
  alpha
} from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



// Styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#141414',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: alpha('#fff', 0.15),
  '&:hover': {
    backgroundColor: alpha('#fff', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledButton = styled(Button)({
  backgroundColor: '#e50914',
  color: 'white',
  '&:hover': {
    backgroundColor: '#f40612',
  },
  margin: '0 8px',
  textTransform: 'none',
});

const Navbar = ({ data, setData }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filtered = data.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setData(filtered);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Movies Collection
          </Typography>

          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search movies…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </SearchWrapper>

          <Box sx={{ flexGrow: 1 }} />  
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledButton
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
            >
              Home
            </StyledButton>
            
            <StyledButton
              startIcon={<AddIcon />}
              onClick={() => navigate('/create')}
            >
              Add Movie
            </StyledButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Navbar;