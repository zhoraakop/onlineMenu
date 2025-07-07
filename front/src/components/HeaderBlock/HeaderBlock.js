import Logo from '../../images/logo.jpg'

const HeaderBlock = () => {
    return (  
        <div className="header-block">
            <img className="header-block__image" alt="Логотип" src={Logo} />
            <h1 className='header-block__title'>Меню</h1>
        </div>
    );
}
 
export default HeaderBlock;