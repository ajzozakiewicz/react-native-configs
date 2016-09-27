import DEBUG from '/config/debug.json';
import RELEASE from '/config/release.json';

const config = () => {
    // __DEV__ - reserved global var for react-native.
    // Will tell you if the build is debug or release
    switch(__DEV__) {
        case true:
            return DEBUG;
        case false:
            return RELEASE;
        default:
            return {};
    }
};

export default config();
