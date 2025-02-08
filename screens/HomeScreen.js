// // 

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
// import { Video } from 'expo-video';

// const HomeScreen = () => {
//   const [activeTab, setActiveTab] = useState('For You'); // Default active tab is "For You"

//   return (
//     <View style={styles.container}>
//       <Video
//         source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Replace with a valid video URL
//         rate={1.0}
//         volume={1.0}
//         isMuted={false}
//         resizeMode="cover"
//         shouldPlay
//         isLooping
//         style={styles.video}
//       />
//       <View style={styles.overlay}>
//         {/* Tab Header */}
//         <View style={styles.topRow}>
//           <TouchableOpacity onPress={() => setActiveTab('Following')}>
//             <Text
//               style={[
//                 styles.header,
//                 activeTab === 'Following' && styles.activeTab,
//               ]}
//             >
//               Following
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setActiveTab('For You')}>
//             <Text
//               style={[
//                 styles.header,
//                 activeTab === 'For You' && styles.activeTab,
//               ]}
//             >
//               For You
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Right-side Icons */}
//         <View style={styles.rightIcons}>
//           <TouchableOpacity style={styles.iconWrapper}>
//             <AntDesign name="hearto" size={28} color="white" />
//             <Text style={styles.iconText}>5.4K</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.iconWrapper}>
//             <Ionicons name="chatbubble-outline" size={28} color="white" />
//             <Text style={styles.iconText}>531</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.iconWrapper}>
//             <MaterialCommunityIcons name="share-outline" size={28} color="white" />
//             <Text style={styles.iconText}>3.8K</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Bottom Row */}
//         <View style={styles.bottomRow}>
//           <Text style={styles.caption}>@username</Text>
//           <Text style={styles.music}>🎵 Song Name - Artist</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 16,
//   },
//   topRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 30,
//   },
//   header: {
//     color: 'white',
//     fontSize: 18,
//     marginHorizontal: 16,
//     opacity: 0.6,
//   },
//   activeTab: {
//     fontWeight: 'bold',
//     opacity: 1,
//     borderBottomWidth: 2,
//     borderBottomColor: '#fff',
//   },
//   rightIcons: {
//     position: 'absolute',
//     right: 16,
//     top: '30%',
//   },
//   iconWrapper: {
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   iconText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   bottomRow: {
//     alignItems: 'flex-start',
//   },
//   caption: {
//     color: 'white',
//     fontSize: 16,
//   },
//   music: {
//     color: 'white',
//     fontSize: 14,
//     marginTop: 4,
//   },
// });

// export default HomeScreen;



// // import React from 'react';
// // import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
// // import { Video } from 'expo-av';

// // const videos = [
// //   { id: '1', uri: 'https://example.com/video1.mp4' },
// //   { id: '2', uri: 'https://example.com/video2.mp4' },
// // ];

// // const HomeScreen = () => {
// //   const renderItem = ({ item }) => (
// //     <Video
// //       source={{ uri: item.uri }}
// //       style={styles.video}
// //       resizeMode="cover"
// //       isLooping
// //       shouldPlay
// //     />
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={videos}
// //         keyExtractor={(item) => item.id}
// //         renderItem={renderItem}
// //         pagingEnabled
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#000' },
// //   video: {
// //     width: Dimensions.get('window').width,
// //     height: Dimensions.get('window').height,
// //   },
// // });

// // export default HomeScreen;



import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Video } from 'expo-av'; // Fallback to expo-av for compatibility

const videos = [
  { id: '1', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4' },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('For You');

  const renderItem = ({ item }) => (
    <View style={styles.videoWrapper}>
      <Video
        source={{ uri: item.uri }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        {/* Header Tabs */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => setActiveTab('Following')}>
            <Text
              style={[
                styles.header,
                activeTab === 'Following' && styles.activeTab,
              ]}
            >
              Following
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('For You')}>
            <Text
              style={[
                styles.header,
                activeTab === 'For You' && styles.activeTab,
              ]}
            >
              For You
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconWrapper}>
            <AntDesign name="hearto" size={28} color="white" />
            <Text style={styles.iconText}>5.4K</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="chatbubble-outline" size={28} color="white" />
            <Text style={styles.iconText}>531</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <MaterialCommunityIcons name="share-outline" size={28} color="white" />
            <Text style={styles.iconText}>3.8K</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Caption */}
        <View style={styles.bottomRow}>
          <Text style={styles.caption}>@username</Text>
          <Text style={styles.music}>🎵 Song Name - Artist</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoWrapper: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 16,
    opacity: 0.6,
  },
  activeTab: {
    fontWeight: 'bold',
    opacity: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  rightIcons: {
    position: 'absolute',
    right: 16,
    top: '30%',
  },
  iconWrapper: {
    alignItems: 'center',
    marginVertical: 8,
  },
  iconText: {
    color: 'white',
    fontSize: 14,
  },
  bottomRow: {
    alignItems: 'flex-start',
  },
  caption: {
    color: 'white',
    fontSize: 16,
  },
  music: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
});

export default HomeScreen;
