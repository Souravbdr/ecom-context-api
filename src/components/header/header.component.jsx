import React from "react";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT US</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                    :
                    <OptionLink to='/signin'>Sign In</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
