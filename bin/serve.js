const path = require('path');
const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');

const PORT = 4545;

const { pathPrefix } = require('../gatsby-config');

const app = express();

// Log requests
app.use(morgan('common'));

// Serve static files with path prefix
app.use(pathPrefix, express.static(path.join(__dirname, '..', 'public')));

// Redirect / to path prefix
app.get('/', (req, res) => res.redirect(`${pathPrefix}/`));

app.listen(PORT, () =>
  console.log(
    chalk.green(`
    Serving on http://localhost:${PORT}${pathPrefix}
    `,
    ),
  ),
);
