import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import ItemDetailSilder from "../../components/ItemDetailSilder";
import Badge from "../../components/Badge";
import IconButton from "components/IconButton";
import ButtonNexted from "components/ButtonNext";

const Detail = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ItemDetailSilder onPress={() => navigation.goBack()} />
      <View style={{ padding: 12 }}>
        <View style={{ gap: 10 }}>
          <Text>Iphone 14 neu à vendre à bon prix</Text>
          <Text>120 000 CFA</Text>
        </View>
        <View>
          <Badge
            backgroundColor="transparent"
            color="gray"
            icon={"speedometer-sharp"}
            text={"Envoyer un message au vendeur"}
          />
          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              columnGap: 10,
            }}
          >
            <TextInput />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: "#fff",
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderRadius: 20,
                  width: "100%",
                  alignItems: "center",
                  margin: "auto",
                },
                pressed
                  ? {
                      backgroundColor: "#f1f1f5",
                      elevation: 10,
                     
                    }
                  : {
                      backgroundColor: "white",
                      elevation: 10,
                      shadowColor: "black",
                      shadowRadius:12,
                      shadowOffset: { width: 10, height: 2 },
                      shadowOpacity:0.2
                    
                    },
              ]}
            >
              <Text>Envoyer</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 12,
        }}
      >
        <BagdeIcon title={"Partager"}>
          <Badge
            backgroundColor="black"
            color="#fff"
            iconSize={30}
            icon={"arrow-redo-outline"}
          />
        </BagdeIcon>
        <BagdeIcon title={"J’aime"}>
          <Badge
            backgroundColor="#0044BB"
            color="#fff"
            iconSize={30}
            icon={"heart-outline"}
          />
        </BagdeIcon>
        <BagdeIcon title={"Modifier"}>
          <Badge
            backgroundColor="#fff"
            color="#0044BB"
            iconSize={30}
            icon={"create-outline"}
          />
        </BagdeIcon>
        <BagdeIcon title={"Boutique"}>
          <Badge
            backgroundColor="#007BFF"
            color="#fff"
            iconSize={30}
            icon={"cart-outline"}
          />
        </BagdeIcon>
        <BagdeIcon title={"Supprimer"}>
          <Badge
            backgroundColor="#A80A0A"
            color="#fff"
            iconSize={30}
            icon={"trash-outline"}
          />
        </BagdeIcon>
      </View>
      <View style={{ padding: 12, gap: 5 }}>
        <Text>Description</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt
          maiores, asperiores eveniet nobis in incidunt blanditiis atque
          cupiditate laboriosam corporis, non nihil temporibus voluptate
          repellendus dicta at inventore fugit?
        </Text>
      </View>
    </View>
  );
};

export default Detail;
const BagdeIcon = ({ children, title }) => {
  return (
    <TouchableOpacity style={{ justifyContent: "center",alignItems:'center',gap:5 }}>
      {children}
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
