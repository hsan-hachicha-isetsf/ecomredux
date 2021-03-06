import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends Component {
    render() {
        return (
          <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Structure
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to ="/user/listusers" className="nav-link">
                    <i className="nav-icon far fa-image" />
                      <p>Utilisateurs</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to = "/art/listarticlesTable" className="nav-link ">
                      <i className="far fa-circle nav-icon" />
                      <p>Articles</p>
                      </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to = "/art/printarticle" className="nav-link ">
                      <i className="far fa-circle nav-icon" />
                      <p>Imprimer article</p>
                      </Link>
                  </li>e
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                      <p>Cat??gories</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sous Cat??gories</p>
                    </a>
                  </li>
                </ul>
              </li>


              

              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Traitements
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Facture</p>
                    </a>
                  </li>
                  <li className="nav-item" > 
                    <a href="#" className="nav-link ">
                      <i className="nav-icon fas fa-edit" />
                      <p>Panier</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                    
                      <i className=" fa-solid  fa-users" />
                      <p>Paiement</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sous Cat??gories</p>
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Impression
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Article</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <i className="far fa-circle nav-icon" />
                      <p>Cat??gories</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Facture</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sous Cat??gories</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Recherche
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Article</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <i className="far fa-circle nav-icon" />
                      <p>Cat??gories</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Facture</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sous Cat??gories</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Simple Link
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
</div>

        )
    }
}
