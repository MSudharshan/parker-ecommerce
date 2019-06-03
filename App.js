
import React, {Component} from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Header, Icon} from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';



export default class App extends React.Component {
	
  render() {

  	  return (
      <View style={styles.container}>
      	<View style={{ flex: 1.5}}>
      		<Header
      			centerComponent={{text: 'ParkerSun', style: {color: 'white', fontSize: 30 }}}	 
      			OuterContainerStyles={{ background: '#9370db'}}
      			leftComponent={{ icon: 'menu', color: '#fff' }}
   				rightComponent={{icon: 'search', color: '#fff' }}
      		/>
      	</View>
      	<View style={{ flex: 1, backgroundColor: 'red'}}>
      		<View style={{ flex: 1 , flexDirection: 'row',  padding: 30}}>		
      			<Icon 
      				name = 'person'
      				Type = 'ionicons'
      				color = 'blue'    
      				size= {50}  
      			/>
      			<View style={{ flex: 1, flexDirection: 'row'  , paddingLeft: 60}}>		
      				<Icon 
      					name = 'shopping-cart'
      					Type = 'foundation'
      					color = 'blue'    
      					size= {40}  
      				/>
       				<View style={{ flex: 1  ,  flexDirection: 'row' , paddingLeft:65}}>		
      					<Icon 
      						name = 'new-releases'
      						Type = 'foundation'
      						color = 'blue'    
      						size= {40}  
      					/>
      					<View style={{ flex: 1,  flexDirection: 'row', paddingLeft: 60 }}>		
      						<Icon 
      							name = 'account-balance-wallet'
      							Type = 'foundation'
      							color = 'blue'    
      							size= {40}  
      						/>
      					</View>
      				</View>
      			</View>
      		</View>
      	</View>
      	<View style={{   flex: 4, flexDirection: 'column'  }}>
      	</View>
      	<View style={{ flex:2, flexDirection: 'column', backgroundColor: 'green' }}>
       	</View>
       	<View style={{ flex:2, flexDirection: 'column', backgroundColor: 'blue' }}>
       	</View>
       	<View style={{ flex:2, flexDirection: 'column', backgroundColor: 'purple' }}>
       		<View style={{ flex: 1,  flexDirection: 'row', paddingTop: 5, paddingLeft: 20}}>
         		<SocialIcon
       				type="twitter"
         			onPress={() => {
         				alert('twitter');
  					}}
  				/>
        		<View style={{ flex: 1,  flexDirection: 'row', paddingLeft: 40 }}>
         			<SocialIcon
           				type="facebook"
         				onPress={() => {
         					alert('facebook');
  						}}
					/>
       			</View>
       			<View style={{ flex: 1,  flexDirection: 'row', paddingLeft: 40 }}>
         			<SocialIcon
           				type="instagram"
         				onPress={() => {
         					alert('instagram');
  						}}
					/>
       			</View>
       			<View style={{ flex: 1,  flexDirection: 'row', paddingLeft: 30 }}>
         			<SocialIcon
           				type="youtube"
         				onPress={() => {
         					alert('youtube');
  						}}
					/>
       			</View>
       		</View>
       	</View>
     </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  }

  
});

AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);