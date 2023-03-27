import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AddMovie } from "./movie/AddMovie"
import { EditMovie } from "./movie/EditMovie"
import { MovieList } from "./movie/MovieList"

export const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/movie">电影列表</Link></li>
            <li><Link to="/movie/add">添加</Link></li>
            <li><Link to="/movie/edit">修改</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/movie/add" element={<AddMovie />} />
          <Route path="/movie/edit" element={<EditMovie id="1" />} />
        </Routes>
      </div>
    </div>
  )
}
