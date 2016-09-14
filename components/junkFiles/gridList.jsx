import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import DialogExampleScrollable from './scrollableDialog.jsx';
import { fetchSubFolders } from '../actions/dropbox';

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

const tilesData = [
  {
    img: 'images/1.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/2.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/3.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/4.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/5.jpg',
    title: 'Morning1',
    author: 'fancycrave1',
  }
];

export default class GridListExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      folderSet: [],
    };
  }

  componentDidMount() {
    //fetchImages(PORTFOLIO, this.readImageResults);
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
      //fetchImages(response[0], this.readImageResults);
      console.log("SubFolders Path" + JSON.stringify(response));
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
            <DialogExampleScrollable key={tile.title} ref={tile.title} path={tile.path}/>
          ))}

        </div>
      );
    } else {
      return (<div className="imageDiv"><img src="" alt="Galleries Loading"/> </div>);
    }
    }
}
