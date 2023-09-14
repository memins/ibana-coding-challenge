import { DataSource } from 'typeorm'

import { getDatabaseOptions } from './index'

const AppDataSource = new DataSource(getDatabaseOptions())

export default AppDataSource
