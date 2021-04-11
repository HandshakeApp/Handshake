import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
	home,
	people,
    settings,
    albums,
    logOut
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: "Home",
        url: "/Home",
        iosIcon: home,
        mdIcon: home,
    },
    {
        title: "Friends",
        url: "/Friends",
        iosIcon: people,
        mdIcon: people,
    },
    {
        title: "Bets",
        url: "/Bets",
        iosIcon: albums,
        mdIcon: albums,
    },
    {
        title: "Settings",
        url: "/Settings",
        iosIcon: settings,
        mdIcon: settings,
    },
    {
        title: "Log out",
        url: "/auth/logout",
        iosIcon: logOut,
        mdIcon: logOut,
    }
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>Handshake</IonListHeader>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    className={
                                        location.pathname === appPage.url
                                            ? "selected"
                                            : ""
                                    }
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}
                                >
                                    <IonIcon
                                        slot="start"
                                        ios={appPage.iosIcon}
                                        md={appPage.mdIcon}
                                    />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
