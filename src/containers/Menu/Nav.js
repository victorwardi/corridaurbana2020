import React, {useState} from 'react';
import classes from './Nav.module.css';



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onClickMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <nav id="main-nav">
                <div className={[classes.overlayMenu, isOpen ? classes.visible : classes.invisible, isOpen && classes.isOpen].join(' ')}>
                    <div className={classes.displayTable}>
                        <div className={[classes.displayTableCell].join(' ')}>
                            <ul id="menu">
                                <li><a href="/calendario">Calendário</a></li>
                                <li><a href="/indique-uma-corrida">Indique uma corrida</a></li>
                                <li><a href="/sobre">Sobre Nós</a></li>
                                <li><a href="/contato">Contato</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <button className={[classes.toggleMenu, classes.cHamburger, classes.cHamburgerHTX, isOpen && classes.isActive].join(' ')} onClick={onClickMenu}>
                    <span>Burger menu</span>
                </button>
            </nav>
        </div>
    );
}

export  default Nav;