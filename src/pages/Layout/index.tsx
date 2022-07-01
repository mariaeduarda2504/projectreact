import { MenuComponent, RodapeComponent } from "components";
import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

const Layout = () => {
    return (
        <S.Layout>
            <MenuComponent>
                <main>
                    <Outlet />
                </main>
                <RodapeComponent />
            </MenuComponent>
        </S.Layout>
    );
};

export default Layout;