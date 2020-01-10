import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient";
import {
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand,
  serializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type ListBulkDeploymentDetailedReportsCommandInput = ListBulkDeploymentDetailedReportsRequest;
export type ListBulkDeploymentDetailedReportsCommandOutput = ListBulkDeploymentDetailedReportsResponse;

export class ListBulkDeploymentDetailedReportsCommand extends $Command<
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBulkDeploymentDetailedReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListBulkDeploymentDetailedReportsCommandInput,
    ListBulkDeploymentDetailedReportsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListBulkDeploymentDetailedReportsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListBulkDeploymentDetailedReportsCommandOutput> {
    return deserializeAws_restJson1_1ListBulkDeploymentDetailedReportsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}