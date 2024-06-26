import React from "react";
import USER_IMG from "../assets/img/user.png"

export default function Nav({ list , setList, qongiroq, setqongiroq, setUser, User }) {
  return (
    <nav class="navbar navbar-expand-lg main-navbar sticky">
      <div class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li>
            <a
              onClick={() => setList((list) => !list)}
              href="#"
              data-toggle="sidebar"
              class="nav-link nav-link-lg
                            collapse-btn"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav navbar-right">
        <li class={User ? "dropdown show" : "dropdown"}>
          <a
            onClick={() => setUser((User) => !User)}
            href="#"
            data-toggle="dropdown"
            class="nav-link dropdown-toggle nav-link-lg nav-link-user"
          >
            {" "}
            <img
              alt="image"
              src={USER_IMG}
              class="user-img-radious-style"
            />{" "}
            <span class="d-sm-none d-lg-inline-block"></span>
          </a>
          <div
            class={
              User
                ? "dropdown-menu dropdown-menu-right pullDown show"
                : "dropdown-menu dropdown-menu-right pullDown"
            }
          >
            <div class="dropdown-title">Salom Admin</div>
            <a href="profile.html" class="dropdown-item has-icon">
              {" "}
              <i
                class="far
                                fa-user"
              ></i>{" "}
              Profile
            </a>{" "}
            <a href="timeline.html" class="dropdown-item has-icon">
              {" "}
              <i class="fas fa-bolt"></i>
              Activities
            </a>{" "}
            <a href="#" class="dropdown-item has-icon">
              {" "}
              <i class="fas fa-cog"></i>
              O'rnatish
            </a>
            <div class="dropdown-divider"></div>
            <a
              href="auth-login.html"
              class="dropdown-item has-icon text-danger"
            >
              {" "}
              <i class="fas fa-sign-out-alt"></i>
              Chiqish
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
