import { Image, Dimensions, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {UserData} from '../utils/UserData'

const { width: screenWidth } = Dimensions.get('window');
const timeAgo = (timestamp) => {
    if (typeof timestamp !== 'number' || isNaN(timestamp)) {
        console.error('Invalid timestamp. Expected a number.');
        return 'Invalid time';
    }

    const units = [
        { name: 'year', millis: 31536000000 },
        { name: 'month', millis: 2592000000 },
        { name: 'week', millis: 604800000 },
        { name: 'day', millis: 86400000 },
        { name: 'hour', millis: 3600000 },
        { name: 'minute', millis: 60000 },
        { name: 'second', millis: 1000 },
    ];

    const difference = Date.now() - timestamp;

    for (const unit of units) {
        const amount = Math.floor(difference / unit.millis);
        if (amount > 0) {
            return `${amount} ${unit.name}${amount > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
};

const Post = () => {
  return (
    <View style={{marginTop: 2}}>
      {UserData.map((item, index) => {
        return(
            <View key={index} style={{marginTop: 10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    marginBottom: 8
                }}>
                    <Image style={{height: 30, width: 30, borderRadius: 15}}
                        source={{uri: item.imageUrl}} />
                    <Text style={{
                        paddingLeft: 10,
                        fontSize: 16,
                        fontWeight: 600,
                        color: 'black'
                    }}>
                        {item.username}
                    </Text>
                </View>
                <View>
                    <Image style={{
                        height: 400, width: screenWidth
                    }} source={{uri: item.feed.imageUrl}}/>
                </View>
                <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    marginHorizontal: 10, 
                    marginTop: 7 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Feather name="heart" size={24} color="black" />
                        <Ionicons name="chatbubble-outline" size={24} color="black" style={{ transform: [{ scaleX: -1 }] }} />
                        <Ionicons name="paper-plane-outline" size={24} color="black" />
                    </View>
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                </View>
                <View style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    marginHorizontal: 10, 
                    marginTop: 5 }}>
                    {item.feed.friendLikes.map((friend, index) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                            <View style={{ 
                                width: 30, 
                                height: 30, 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                borderWidth: 3, 
                                borderColor: '#FFFFFF', 
                                borderRadius: 200, 
                                marginRight: -15 }}>
                                <Image source={{ uri: friend.imageUrl }} style={{ width: '100%', height: '100%', 
                                    borderRadius: 200, objectFit: 'cover', borderWidth: 1, borderColor: 'gray' }} />
                            </View>
                        </View>
                    ))}
                    <Text style={{ 
                        fontWeight: '400', 
                        fontSize: 12, 
                        color: '#000000', 
                        marginLeft: 18 }}> Liked by {item.feed.friendLikes[0].name} and {item.feed.totalLikes - 1} others
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <Text><Text style={{ marginHorizontal: 10, fontWeight: 'bold', color: '#000000' }}>
                        {item.username} </Text>{item.feed.caption}
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                    <Text style={{ fontWeight: '600', fontSize: 12, color: '#a3a3a3' }}>
                        View all {item.feed.totalComments} comments
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 5, marginBottom: 7 }}>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#a3a3a3' }}>
                        {timeAgo(item.feed.postDate)}
                    </Text>
                </View>
            </View>
        );
      })}
    </View>
  );
};

export default Post