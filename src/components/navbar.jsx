import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" href="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Create Video </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="getvideo/">Get Video </Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="webhook/">Add webhook </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}