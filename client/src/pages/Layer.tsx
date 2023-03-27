import { Link, NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AddMovie } from "./movie/AddMovie"
import { EditMovie } from "./movie/EditMovie"
import { MovieList } from "./movie/MovieList"
import { Layout, Menu } from "antd"

const { Header, Sider, Content } = Layout;

export const Layer: React.FC = () => {
  return (
    <div className="container">
      <Layout>
        <Header className="header">
          <NavLink to="/">xx电影管理系统</NavLink>
        </Header>
        <Layout>
          <Sider>
            <nav>
              <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
              >
                <Menu.Item>
                  <Link to="/movie" key="2">电影列表</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/movie/add" key="3">添加电影</Link>
                </Menu.Item>
              </Menu>
            </nav>
          </Sider>
          <Content>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<MovieList />} />
                <Route path="/movie/add" element={<AddMovie />} />
                <Route path="/movie/edit" element={<EditMovie id="1" />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>

    </div>
  )
}
