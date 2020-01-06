import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticTranscoderClient";
import {
  ListJobsByPipelineRequest,
  ListJobsByPipelineResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1ListJobsByPipelineCommand,
  serializeAws_restJson1_1ListJobsByPipelineCommand
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

export type ListJobsByPipelineCommandInput = ListJobsByPipelineRequest;
export type ListJobsByPipelineCommandOutput = ListJobsByPipelineResponse;

export class ListJobsByPipelineCommand extends $Command<
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobsByPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput> {
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
    input: ListJobsByPipelineCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListJobsByPipelineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListJobsByPipelineCommandOutput> {
    return deserializeAws_restJson1_1ListJobsByPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
