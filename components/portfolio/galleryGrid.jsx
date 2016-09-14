import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import GalleryDialog from './galleryDialog.jsx';
import { fetchSubFolders } from '../../actions/dropbox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    position: 'relative',
  },
  gridList: {
    marginTop: 48,
    width: '80%',
    height: '100%',
    padding: 30,
    overflowY: 'auto',
    marginBottom: 48,
  },
};

const gridListPadding = 30;

export default class GalleryGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      folderSet: [],
    };
  }

  componentDidMount() {
    var subFolderPromise = fetchSubFolders('/Deepika-WebsitePhotos/Portfolio');
    subFolderPromise.then(function(response) {
      var folderSet = [];
      for (var i = 0; i < response.length; i++) {
        var folder = {img: 'images/1.jpg', id: 'gallery' + i,
           title: response[i], path: response[i]};
           folderSet.push(folder);
      }
      this.setState({
        folderSet: folderSet,
      });
    }.bind(this), function() {
      console.log("Couldn't read folder's subFolders");
    });
  }

  render() {
    var folderSet = this.state.folderSet;
    if (typeof folderSet != 'undefined' && folderSet.length > 0) {
      return (
        <div style={styles.root}>
          <GridList
            cellHeight={300}
            padding={gridListPadding}
            style={styles.gridList}
          >
            {this.state.folderSet.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                onClick={() => this.refs[tile.title].handleOpen()}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
          {folderSet.map((tile) => (
            <GalleryDialog key={tile.title} ref={tile.title} path={tile.path}/>
          ))}

        </div>
      );
    } else {
      return (<div className="imageDiv"><img src="" alt="Galleries Loading"/> </div>);
    }
    }
}
