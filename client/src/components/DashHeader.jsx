import { Link } from "react-router-dom";

export default function DashHeader(){
    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
            <Link to="/dash">
                <h1 className="dash-header__title">Technotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    
                </nav>
            </div>
        </header>
    )
    return content
}