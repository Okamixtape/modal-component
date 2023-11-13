# React Modal Component

A customizable and reusable Modal component for React applications. 
This component offers both pre-created and customizable modals, suitable for various UI scenarios like displaying success messages, errors, warnings, etc.

## Installation

To install the React Modal Component, you can use npm:

```bash
npm install modal-component-test
```

## Props

- **modal** : String|Object - Use "error" or "valid" for pre-created modals. For custom modals, pass an object with 'title', 'icon', 'altText', 'content', 'cta'.
- **closeIcon** : Boolean - Determines whether a close icon is displayed.
- **button** : Boolean - Determines whether a button is displayed.
- **allowCustomization** : Boolean - If true, allows passing a custom object for modal configuration.
- **buttonCallback** : Function - Callback function that executes when the modal button or close icon is pressed.

## Customization 

You can customize the modal by passing an object to the modal prop with the following structure: 

```
{
  title: 'Custom',
  icon: 'customIcon.png',
  altText: 'Custom image',
  content: 'This is a custom modal',
  cta: 'Okay'
}
```

Ensure that `allowCustomization` is set to `true` when using custom configurations.

## Usage

Here's how you can use the React Modal Component in your application:

```
import Modal from 'modal-component-test/dist/components/Modal';
import customIcon from '.custom-icon.png'

const App = () => {
  const handleModalClose = () => {
    console.log('Modal closed');
  };

  const myCustomModal = {
    title: 'Custom Modal',
    icon: 'customIcon.png',
    altText: 'Custom image',
    content: 'This is a custom modal. To close it use the closing icon',
    cta: 'Okay !'
  }

  return (
    <div>
      <Modal
        modal={myCustomModal}
        closeIcon={true}
        button={true}
        allowCustomization={true}
        buttonCallback={handleModalClose}
      />
    </div>
  );
};

export default App;
```

For any issues or feature requests, please open an issue or pull request on the repository.
