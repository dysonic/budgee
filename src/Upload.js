import React, {createRef, Component} from 'react';
import './Upload.css';

export const getFile = current => {
  const { files } = current;
  console.log('files:', files.length);
  const file = files[0];
  console.log('filename:', file.name);
  console.log('size', file.size);
  console.log('type', file.type);
  return file;
}
class UploadComponent extends Component {

  constructor(props) {
    super(props);
    this.fileRef = createRef();
  }

  onUpload() {
    const file = getFile(this.fileRef.current);
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.props.handleUpload(formData);
  }

  render() {
    const {
      onUpload
    } = this;
    return (
      <form>
        <div className="upload">
          <div>
            <label htmlFor="file">browse</label>
            <input id="file" type="file" ref={this.fileRef} />
          </div>
          <div>
            <button id="upload" type="button" onClick={onUpload.bind(this)}>Upload</button>
          </div>
        </div>
      </form>
    );
  }
}

export default UploadComponent;
