import path from 'path'

import { getThemeConfiguration } from '../../../configuration'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require(path.resolve(__dirname, 'package.json'))

export default getThemeConfiguration(pkg)
