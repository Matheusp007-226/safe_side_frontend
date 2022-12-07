import * as React from 'react';
import { ScrollView } from 'react-native';
import { Dialog, Portal, TextInput } from 'react-native-paper';

const ModalComentarios = (props) => {

  const [visible, setVisible] = React.useState(props.visible);
  const [text, setText] = React.useState("");

  const hideDialog = () => setVisible(!visible);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea>
          <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
          <TextInput
            label="Comentário"
            multiline={true}
            numberOfLines={8}
            value={text}
            onChangeText={text => setText(text)}
          />
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

export default ModalComentarios;