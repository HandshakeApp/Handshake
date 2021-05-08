import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface Props {
	name: string;
}
const Page: React.FC<Props> = (props) => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{props.name}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen className="ion-padding">
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{props.name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{props.children}
			</IonContent>
		</IonPage>
	);
};

export default Page;
