const fs = require('fs');
const path = require('path');

module.exports = {
  plugin(schema, documents, config) {
    const realGeneratedPath = path.join(__dirname, config.operatorPath || '../operations');

    const generatedLists = fs.readdirSync(realGeneratedPath);

    const mapGeneratedFiles = generatedLists.map((generated) => {
      // Remove extension
      const newGenerated = generated.replace(/\.[^/.]+$/, '');

      return `export * from './generated/${newGenerated}.generated';`;
    });

    // Add types to the top of the file
    mapGeneratedFiles.unshift(`export * from './generated/types';`);

    return mapGeneratedFiles.join('\n');
  }
};
