import { Module } from '@nestjs/common';
import { HistoricalMarketModule } from './historical-market/historical-market.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PortfolioModule } from './portfolio/portfolio.module';
import { OrmModule } from './modules/orm.module';
import { GraphQLFormattedError } from 'graphql';
import { validationConfig } from './common/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), '.env'),
      validationSchema: validationConfig,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      useGlobalPrefix: true,
      formatError: (error: any) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
        };
        return graphQLFormattedError;
      },
    }),
    OrmModule,
    HistoricalMarketModule,
    PortfolioModule,
  ],
})
export class AppModule {}
