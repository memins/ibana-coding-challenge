import { DataSource } from 'typeorm'

import { getDatabaseOptions } from './index'

const MockDataSource = new DataSource(getDatabaseOptions(true))

export default MockDataSource
