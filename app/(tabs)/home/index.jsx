import {View} from "react-native";
import {useRouter} from "expo-router";
import {Button} from "@react-native-material/core";

const Home = () => {
    const router = useRouter()
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Button
                title="Settings"
                variant="text"
                color="primary"
                onPress={() => router.push('/home/settings')}
            />
        </View>
    );
};

export default Home;
