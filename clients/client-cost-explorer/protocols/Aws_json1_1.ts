import {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput
} from "../commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput
} from "../commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput
} from "../commands/DescribeCostCategoryDefinitionCommand";
import {
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput
} from "../commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput
} from "../commands/GetCostAndUsageWithResourcesCommand";
import {
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput
} from "../commands/GetCostForecastCommand";
import {
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput
} from "../commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput
} from "../commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput
} from "../commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput
} from "../commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput
} from "../commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput
} from "../commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput
} from "../commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput
} from "../commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput
} from "../commands/GetSavingsPlansUtilizationDetailsCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "../commands/GetTagsCommand";
import {
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput
} from "../commands/GetUsageForecastCommand";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput
} from "../commands/ListCostCategoryDefinitionsCommand";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput
} from "../commands/UpdateCostCategoryDefinitionCommand";
import {
  BillExpirationException,
  CostCategory,
  CostCategoryReference,
  CostCategoryRule,
  CostCategoryValues,
  Coverage,
  CoverageByTime,
  CoverageCost,
  CoverageHours,
  CoverageNormalizedUnits,
  CreateCostCategoryDefinitionRequest,
  CreateCostCategoryDefinitionResponse,
  CurrentInstance,
  DataUnavailableException,
  DateInterval,
  DeleteCostCategoryDefinitionRequest,
  DeleteCostCategoryDefinitionResponse,
  DescribeCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionResponse,
  DimensionValues,
  DimensionValuesWithAttributes,
  EC2InstanceDetails,
  EC2ResourceDetails,
  EC2ResourceUtilization,
  EC2Specification,
  ESInstanceDetails,
  ElastiCacheInstanceDetails,
  Expression,
  ForecastResult,
  GetCostAndUsageRequest,
  GetCostAndUsageResponse,
  GetCostAndUsageWithResourcesRequest,
  GetCostAndUsageWithResourcesResponse,
  GetCostForecastRequest,
  GetCostForecastResponse,
  GetDimensionValuesRequest,
  GetDimensionValuesResponse,
  GetReservationCoverageRequest,
  GetReservationCoverageResponse,
  GetReservationPurchaseRecommendationRequest,
  GetReservationPurchaseRecommendationResponse,
  GetReservationUtilizationRequest,
  GetReservationUtilizationResponse,
  GetRightsizingRecommendationRequest,
  GetRightsizingRecommendationResponse,
  GetSavingsPlansCoverageRequest,
  GetSavingsPlansCoverageResponse,
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationDetailsResponse,
  GetSavingsPlansUtilizationRequest,
  GetSavingsPlansUtilizationResponse,
  GetTagsRequest,
  GetTagsResponse,
  GetUsageForecastRequest,
  GetUsageForecastResponse,
  Group,
  GroupDefinition,
  InstanceDetails,
  InvalidNextTokenException,
  LimitExceededException,
  ListCostCategoryDefinitionsRequest,
  ListCostCategoryDefinitionsResponse,
  MetricValue,
  ModifyRecommendationDetail,
  RDSInstanceDetails,
  RedshiftInstanceDetails,
  RequestChangedException,
  ReservationAggregates,
  ReservationCoverageGroup,
  ReservationPurchaseRecommendation,
  ReservationPurchaseRecommendationDetail,
  ReservationPurchaseRecommendationMetadata,
  ReservationPurchaseRecommendationSummary,
  ReservationUtilizationGroup,
  ResourceDetails,
  ResourceNotFoundException,
  ResourceUtilization,
  ResultByTime,
  RightsizingRecommendation,
  RightsizingRecommendationMetadata,
  RightsizingRecommendationSummary,
  SavingsPlansAmortizedCommitment,
  SavingsPlansCoverage,
  SavingsPlansCoverageData,
  SavingsPlansDetails,
  SavingsPlansPurchaseRecommendation,
  SavingsPlansPurchaseRecommendationDetail,
  SavingsPlansPurchaseRecommendationMetadata,
  SavingsPlansPurchaseRecommendationSummary,
  SavingsPlansSavings,
  SavingsPlansUtilization,
  SavingsPlansUtilizationAggregates,
  SavingsPlansUtilizationByTime,
  SavingsPlansUtilizationDetail,
  ServiceQuotaExceededException,
  ServiceSpecification,
  TagValues,
  TargetInstance,
  TerminateRecommendationDetail,
  UnresolvableUsageUnitException,
  UpdateCostCategoryDefinitionRequest,
  UpdateCostCategoryDefinitionResponse,
  UtilizationByTime
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateCostCategoryDefinitionCommand(
  input: CreateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.CreateCostCategoryDefinition";
  let body: any = {};
  const wrappedBody: any = {
    CreateCostCategoryDefinitionRequest: serializeAws_json1_1CreateCostCategoryDefinitionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCostCategoryDefinition",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteCostCategoryDefinitionCommand(
  input: DeleteCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.DeleteCostCategoryDefinition";
  let body: any = {};
  const wrappedBody: any = {
    DeleteCostCategoryDefinitionRequest: serializeAws_json1_1DeleteCostCategoryDefinitionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCostCategoryDefinition",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCostCategoryDefinitionCommand(
  input: DescribeCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.DescribeCostCategoryDefinition";
  let body: any = {};
  const wrappedBody: any = {
    DescribeCostCategoryDefinitionRequest: serializeAws_json1_1DescribeCostCategoryDefinitionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCostCategoryDefinition",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCostAndUsageCommand(
  input: GetCostAndUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetCostAndUsage";
  let body: any = {};
  const wrappedBody: any = {
    GetCostAndUsageRequest: serializeAws_json1_1GetCostAndUsageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCostAndUsage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCostAndUsageWithResourcesCommand(
  input: GetCostAndUsageWithResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.GetCostAndUsageWithResources";
  let body: any = {};
  const wrappedBody: any = {
    GetCostAndUsageWithResourcesRequest: serializeAws_json1_1GetCostAndUsageWithResourcesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCostAndUsageWithResources",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCostForecastCommand(
  input: GetCostForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetCostForecast";
  let body: any = {};
  const wrappedBody: any = {
    GetCostForecastRequest: serializeAws_json1_1GetCostForecastRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCostForecast",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDimensionValuesCommand(
  input: GetDimensionValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetDimensionValues";
  let body: any = {};
  const wrappedBody: any = {
    GetDimensionValuesRequest: serializeAws_json1_1GetDimensionValuesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDimensionValues",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetReservationCoverageCommand(
  input: GetReservationCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetReservationCoverage";
  let body: any = {};
  const wrappedBody: any = {
    GetReservationCoverageRequest: serializeAws_json1_1GetReservationCoverageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetReservationCoverage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetReservationPurchaseRecommendationCommand(
  input: GetReservationPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.GetReservationPurchaseRecommendation";
  let body: any = {};
  const wrappedBody: any = {
    GetReservationPurchaseRecommendationRequest: serializeAws_json1_1GetReservationPurchaseRecommendationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetReservationPurchaseRecommendation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetReservationUtilizationCommand(
  input: GetReservationUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetReservationUtilization";
  let body: any = {};
  const wrappedBody: any = {
    GetReservationUtilizationRequest: serializeAws_json1_1GetReservationUtilizationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetReservationUtilization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetRightsizingRecommendationCommand(
  input: GetRightsizingRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.GetRightsizingRecommendation";
  let body: any = {};
  const wrappedBody: any = {
    GetRightsizingRecommendationRequest: serializeAws_json1_1GetRightsizingRecommendationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRightsizingRecommendation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetSavingsPlansCoverageCommand(
  input: GetSavingsPlansCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetSavingsPlansCoverage";
  let body: any = {};
  const wrappedBody: any = {
    GetSavingsPlansCoverageRequest: serializeAws_json1_1GetSavingsPlansCoverageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetSavingsPlansCoverage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(
  input: GetSavingsPlansPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation";
  let body: any = {};
  const wrappedBody: any = {
    GetSavingsPlansPurchaseRecommendationRequest: serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetSavingsPlansPurchaseRecommendation",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetSavingsPlansUtilizationCommand(
  input: GetSavingsPlansUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.GetSavingsPlansUtilization";
  let body: any = {};
  const wrappedBody: any = {
    GetSavingsPlansUtilizationRequest: serializeAws_json1_1GetSavingsPlansUtilizationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetSavingsPlansUtilization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails";
  let body: any = {};
  const wrappedBody: any = {
    GetSavingsPlansUtilizationDetailsRequest: serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetSavingsPlansUtilizationDetails",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetTagsCommand(
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetTags";
  let body: any = {};
  const wrappedBody: any = {
    GetTagsRequest: serializeAws_json1_1GetTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetUsageForecastCommand(
  input: GetUsageForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSInsightsIndexService.GetUsageForecast";
  let body: any = {};
  const wrappedBody: any = {
    GetUsageForecastRequest: serializeAws_json1_1GetUsageForecastRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetUsageForecast",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListCostCategoryDefinitionsCommand(
  input: ListCostCategoryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.ListCostCategoryDefinitions";
  let body: any = {};
  const wrappedBody: any = {
    ListCostCategoryDefinitionsRequest: serializeAws_json1_1ListCostCategoryDefinitionsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListCostCategoryDefinitions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateCostCategoryDefinitionCommand(
  input: UpdateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSInsightsIndexService.UpdateCostCategoryDefinition";
  let body: any = {};
  const wrappedBody: any = {
    UpdateCostCategoryDefinitionRequest: serializeAws_json1_1UpdateCostCategoryDefinitionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateCostCategoryDefinition",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateCostCategoryDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCostCategoryDefinitionResponse(
    data.CreateCostCategoryDefinitionResponse,
    context
  );
  const response: CreateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#ServiceQuotaExceededException":
      response = await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteCostCategoryDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCostCategoryDefinitionResponse(
    data.DeleteCostCategoryDefinitionResponse,
    context
  );
  const response: DeleteCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsinsightsindexservice.v0#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeCostCategoryDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCostCategoryDefinitionResponse(
    data.DescribeCostCategoryDefinitionResponse,
    context
  );
  const response: DescribeCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsinsightsindexservice.v0#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCostAndUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCostAndUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostAndUsageResponse(
    data.GetCostAndUsageResponse,
    context
  );
  const response: GetCostAndUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCostAndUsageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCostAndUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
      response = await deserializeAws_json1_1BillExpirationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestChangedException":
    case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
      response = await deserializeAws_json1_1RequestChangedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCostAndUsageWithResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostAndUsageWithResourcesResponse(
    data.GetCostAndUsageWithResourcesResponse,
    context
  );
  const response: GetCostAndUsageWithResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCostAndUsageWithResourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
      response = await deserializeAws_json1_1BillExpirationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestChangedException":
    case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
      response = await deserializeAws_json1_1RequestChangedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCostForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCostForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostForecastResponse(
    data.GetCostForecastResponse,
    context
  );
  const response: GetCostForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCostForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCostForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDimensionValuesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDimensionValuesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDimensionValuesResponse(
    data.GetDimensionValuesResponse,
    context
  );
  const response: GetDimensionValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDimensionValuesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDimensionValuesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
      response = await deserializeAws_json1_1BillExpirationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestChangedException":
    case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
      response = await deserializeAws_json1_1RequestChangedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetReservationCoverageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReservationCoverageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationCoverageResponse(
    data.GetReservationCoverageResponse,
    context
  );
  const response: GetReservationCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReservationCoverageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetReservationCoverageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetReservationPurchaseRecommendationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationPurchaseRecommendationResponse(
    data.GetReservationPurchaseRecommendationResponse,
    context
  );
  const response: GetReservationPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReservationPurchaseRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetReservationUtilizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReservationUtilizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationUtilizationResponse(
    data.GetReservationUtilizationResponse,
    context
  );
  const response: GetReservationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReservationUtilizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetReservationUtilizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetRightsizingRecommendationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRightsizingRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRightsizingRecommendationResponse(
    data.GetRightsizingRecommendationResponse,
    context
  );
  const response: GetRightsizingRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRightsizingRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRightsizingRecommendationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetSavingsPlansCoverageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansCoverageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansCoverageResponse(
    data.GetSavingsPlansCoverageResponse,
    context
  );
  const response: GetSavingsPlansCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansCoverageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSavingsPlansCoverageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse(
    data.GetSavingsPlansPurchaseRecommendationResponse,
    context
  );
  const response: GetSavingsPlansPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansPurchaseRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetSavingsPlansUtilizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansUtilizationResponse(
    data.GetSavingsPlansUtilizationResponse,
    context
  );
  const response: GetSavingsPlansUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansUtilizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse(
    data.GetSavingsPlansUtilizationDetailsResponse,
    context
  );
  const response: GetSavingsPlansUtilizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansUtilizationDetailsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagsResponse(
    data.GetTagsResponse,
    context
  );
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BillExpirationException":
    case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
      response = await deserializeAws_json1_1BillExpirationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestChangedException":
    case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
      response = await deserializeAws_json1_1RequestChangedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetUsageForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetUsageForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUsageForecastResponse(
    data.GetUsageForecastResponse,
    context
  );
  const response: GetUsageForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUsageForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetUsageForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataUnavailableException":
    case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
      response = await deserializeAws_json1_1DataUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnresolvableUsageUnitException":
    case "com.amazonaws.awsinsightsindexservice.v0#UnresolvableUsageUnitException":
      response = await deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListCostCategoryDefinitionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCostCategoryDefinitionsResponse(
    data.ListCostCategoryDefinitionsResponse,
    context
  );
  const response: ListCostCategoryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCostCategoryDefinitionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateCostCategoryDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCostCategoryDefinitionResponse(
    data.UpdateCostCategoryDefinitionResponse,
    context
  );
  const response: UpdateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsinsightsindexservice.v0#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.awsinsightsindexservice.v0#ServiceQuotaExceededException":
      response = await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsinsightsindexservice.v0#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1BillExpirationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BillExpirationException> => {
  const deserialized: any = deserializeAws_json1_1BillExpirationException(
    output.body,
    context
  );
  const contents: BillExpirationException = {
    __type: "BillExpirationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DataUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DataUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1DataUnavailableException(
    output.body,
    context
  );
  const contents: DataUnavailableException = {
    __type: "DataUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestChangedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestChangedException> => {
  const deserialized: any = deserializeAws_json1_1RequestChangedException(
    output.body,
    context
  );
  const contents: RequestChangedException = {
    __type: "RequestChangedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(
    output.body,
    context
  );
  const contents: ServiceQuotaExceededException = {
    __type: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnresolvableUsageUnitException> => {
  const deserialized: any = deserializeAws_json1_1UnresolvableUsageUnitException(
    output.body,
    context
  );
  const contents: UnresolvableUsageUnitException = {
    __type: "UnresolvableUsageUnitException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CostCategoryRule = (
  input: CostCategoryRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Rule !== undefined) {
    bodyParams["Rule"] = serializeAws_json1_1Expression(input.Rule, context);
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1CostCategoryRulesList = (
  input: Array<CostCategoryRule>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1CostCategoryRule(entry, context)
  );
};

const serializeAws_json1_1CostCategoryValues = (
  input: CostCategoryValues,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCostCategoryDefinitionRequest = (
  input: CreateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RuleVersion !== undefined) {
    bodyParams["RuleVersion"] = input.RuleVersion;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1CostCategoryRulesList(
      input.Rules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DateInterval = (
  input: DateInterval,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.End !== undefined) {
    bodyParams["End"] = input.End;
  }
  if (input.Start !== undefined) {
    bodyParams["Start"] = input.Start;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCostCategoryDefinitionRequest = (
  input: DeleteCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CostCategoryArn !== undefined) {
    bodyParams["CostCategoryArn"] = input.CostCategoryArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCostCategoryDefinitionRequest = (
  input: DescribeCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CostCategoryArn !== undefined) {
    bodyParams["CostCategoryArn"] = input.CostCategoryArn;
  }
  if (input.EffectiveOn !== undefined) {
    bodyParams["EffectiveOn"] = input.EffectiveOn;
  }
  return bodyParams;
};

const serializeAws_json1_1DimensionValues = (
  input: DimensionValues,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
  }
  return bodyParams;
};

const serializeAws_json1_1EC2Specification = (
  input: EC2Specification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.OfferingClass !== undefined) {
    bodyParams["OfferingClass"] = input.OfferingClass;
  }
  return bodyParams;
};

const serializeAws_json1_1Expression = (
  input: Expression,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.And !== undefined) {
    bodyParams["And"] = serializeAws_json1_1Expressions(input.And, context);
  }
  if (input.CostCategories !== undefined) {
    bodyParams["CostCategories"] = serializeAws_json1_1CostCategoryValues(
      input.CostCategories,
      context
    );
  }
  if (input.Dimensions !== undefined) {
    bodyParams["Dimensions"] = serializeAws_json1_1DimensionValues(
      input.Dimensions,
      context
    );
  }
  if (input.Not !== undefined) {
    bodyParams["Not"] = serializeAws_json1_1Expression(input.Not, context);
  }
  if (input.Or !== undefined) {
    bodyParams["Or"] = serializeAws_json1_1Expressions(input.Or, context);
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagValues(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Expressions = (
  input: Array<Expression>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Expression(entry, context)
  );
};

const serializeAws_json1_1GetCostAndUsageRequest = (
  input: GetCostAndUsageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(
      input.GroupBy,
      context
    );
  }
  if (input.Metrics !== undefined) {
    bodyParams["Metrics"] = serializeAws_json1_1MetricNames(
      input.Metrics,
      context
    );
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetCostAndUsageWithResourcesRequest = (
  input: GetCostAndUsageWithResourcesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(
      input.GroupBy,
      context
    );
  }
  if (input.Metrics !== undefined) {
    bodyParams["Metrics"] = serializeAws_json1_1MetricNames(
      input.Metrics,
      context
    );
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetCostForecastRequest = (
  input: GetCostForecastRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.Metric !== undefined) {
    bodyParams["Metric"] = input.Metric;
  }
  if (input.PredictionIntervalLevel !== undefined) {
    bodyParams["PredictionIntervalLevel"] = input.PredictionIntervalLevel;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetDimensionValuesRequest = (
  input: GetDimensionValuesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Context !== undefined) {
    bodyParams["Context"] = input.Context;
  }
  if (input.Dimension !== undefined) {
    bodyParams["Dimension"] = input.Dimension;
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.SearchString !== undefined) {
    bodyParams["SearchString"] = input.SearchString;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetReservationCoverageRequest = (
  input: GetReservationCoverageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(
      input.GroupBy,
      context
    );
  }
  if (input.Metrics !== undefined) {
    bodyParams["Metrics"] = serializeAws_json1_1MetricNames(
      input.Metrics,
      context
    );
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetReservationPurchaseRecommendationRequest = (
  input: GetReservationPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.AccountScope !== undefined) {
    bodyParams["AccountScope"] = input.AccountScope;
  }
  if (input.LookbackPeriodInDays !== undefined) {
    bodyParams["LookbackPeriodInDays"] = input.LookbackPeriodInDays;
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.PageSize !== undefined) {
    bodyParams["PageSize"] = input.PageSize;
  }
  if (input.PaymentOption !== undefined) {
    bodyParams["PaymentOption"] = input.PaymentOption;
  }
  if (input.Service !== undefined) {
    bodyParams["Service"] = input.Service;
  }
  if (input.ServiceSpecification !== undefined) {
    bodyParams[
      "ServiceSpecification"
    ] = serializeAws_json1_1ServiceSpecification(
      input.ServiceSpecification,
      context
    );
  }
  if (input.TermInYears !== undefined) {
    bodyParams["TermInYears"] = input.TermInYears;
  }
  return bodyParams;
};

const serializeAws_json1_1GetReservationUtilizationRequest = (
  input: GetReservationUtilizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(
      input.GroupBy,
      context
    );
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetRightsizingRecommendationRequest = (
  input: GetRightsizingRecommendationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.PageSize !== undefined) {
    bodyParams["PageSize"] = input.PageSize;
  }
  if (input.Service !== undefined) {
    bodyParams["Service"] = input.Service;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSavingsPlansCoverageRequest = (
  input: GetSavingsPlansCoverageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.GroupBy !== undefined) {
    bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(
      input.GroupBy,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Metrics !== undefined) {
    bodyParams["Metrics"] = serializeAws_json1_1MetricNames(
      input.Metrics,
      context
    );
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = (
  input: GetSavingsPlansPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.LookbackPeriodInDays !== undefined) {
    bodyParams["LookbackPeriodInDays"] = input.LookbackPeriodInDays;
  }
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.PageSize !== undefined) {
    bodyParams["PageSize"] = input.PageSize;
  }
  if (input.PaymentOption !== undefined) {
    bodyParams["PaymentOption"] = input.PaymentOption;
  }
  if (input.SavingsPlansType !== undefined) {
    bodyParams["SavingsPlansType"] = input.SavingsPlansType;
  }
  if (input.TermInYears !== undefined) {
    bodyParams["TermInYears"] = input.TermInYears;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = (
  input: GetSavingsPlansUtilizationDetailsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetSavingsPlansUtilizationRequest = (
  input: GetSavingsPlansUtilizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetTagsRequest = (
  input: GetTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.SearchString !== undefined) {
    bodyParams["SearchString"] = input.SearchString;
  }
  if (input.TagKey !== undefined) {
    bodyParams["TagKey"] = input.TagKey;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetUsageForecastRequest = (
  input: GetUsageForecastRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1Expression(
      input.Filter,
      context
    );
  }
  if (input.Granularity !== undefined) {
    bodyParams["Granularity"] = input.Granularity;
  }
  if (input.Metric !== undefined) {
    bodyParams["Metric"] = input.Metric;
  }
  if (input.PredictionIntervalLevel !== undefined) {
    bodyParams["PredictionIntervalLevel"] = input.PredictionIntervalLevel;
  }
  if (input.TimePeriod !== undefined) {
    bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(
      input.TimePeriod,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GroupDefinition = (
  input: GroupDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1GroupDefinitions = (
  input: Array<GroupDefinition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1GroupDefinition(entry, context)
  );
};

const serializeAws_json1_1ListCostCategoryDefinitionsRequest = (
  input: ListCostCategoryDefinitionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EffectiveOn !== undefined) {
    bodyParams["EffectiveOn"] = input.EffectiveOn;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ServiceSpecification = (
  input: ServiceSpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EC2Specification !== undefined) {
    bodyParams["EC2Specification"] = serializeAws_json1_1EC2Specification(
      input.EC2Specification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TagValues = (
  input: TagValues,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateCostCategoryDefinitionRequest = (
  input: UpdateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CostCategoryArn !== undefined) {
    bodyParams["CostCategoryArn"] = input.CostCategoryArn;
  }
  if (input.RuleVersion !== undefined) {
    bodyParams["RuleVersion"] = input.RuleVersion;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1CostCategoryRulesList(
      input.Rules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Values = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_json1_1Attributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1BillExpirationException = (
  output: any,
  context: __SerdeContext
): BillExpirationException => {
  let contents: any = {
    __type: "BillExpirationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CostCategory = (
  output: any,
  context: __SerdeContext
): CostCategory => {
  let contents: any = {
    __type: "CostCategory",
    CostCategoryArn: undefined,
    EffectiveEnd: undefined,
    EffectiveStart: undefined,
    Name: undefined,
    RuleVersion: undefined,
    Rules: undefined
  };
  if (output.CostCategoryArn !== undefined) {
    contents.CostCategoryArn = output.CostCategoryArn;
  }
  if (output.EffectiveEnd !== undefined) {
    contents.EffectiveEnd = output.EffectiveEnd;
  }
  if (output.EffectiveStart !== undefined) {
    contents.EffectiveStart = output.EffectiveStart;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.RuleVersion !== undefined) {
    contents.RuleVersion = output.RuleVersion;
  }
  if (output.Rules !== undefined) {
    contents.Rules = deserializeAws_json1_1CostCategoryRulesList(
      output.Rules,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CostCategoryReference = (
  output: any,
  context: __SerdeContext
): CostCategoryReference => {
  let contents: any = {
    __type: "CostCategoryReference",
    CostCategoryArn: undefined,
    EffectiveEnd: undefined,
    EffectiveStart: undefined,
    Name: undefined
  };
  if (output.CostCategoryArn !== undefined) {
    contents.CostCategoryArn = output.CostCategoryArn;
  }
  if (output.EffectiveEnd !== undefined) {
    contents.EffectiveEnd = output.EffectiveEnd;
  }
  if (output.EffectiveStart !== undefined) {
    contents.EffectiveStart = output.EffectiveStart;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1CostCategoryReferencesList = (
  output: any,
  context: __SerdeContext
): Array<CostCategoryReference> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CostCategoryReference(entry, context)
  );
};

const deserializeAws_json1_1CostCategoryRule = (
  output: any,
  context: __SerdeContext
): CostCategoryRule => {
  let contents: any = {
    __type: "CostCategoryRule",
    Rule: undefined,
    Value: undefined
  };
  if (output.Rule !== undefined) {
    contents.Rule = deserializeAws_json1_1Expression(output.Rule, context);
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1CostCategoryRulesList = (
  output: any,
  context: __SerdeContext
): Array<CostCategoryRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CostCategoryRule(entry, context)
  );
};

const deserializeAws_json1_1CostCategoryValues = (
  output: any,
  context: __SerdeContext
): CostCategoryValues => {
  let contents: any = {
    __type: "CostCategoryValues",
    Key: undefined,
    Values: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Values !== undefined) {
    contents.Values = deserializeAws_json1_1Values(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1Coverage = (
  output: any,
  context: __SerdeContext
): Coverage => {
  let contents: any = {
    __type: "Coverage",
    CoverageCost: undefined,
    CoverageHours: undefined,
    CoverageNormalizedUnits: undefined
  };
  if (output.CoverageCost !== undefined) {
    contents.CoverageCost = deserializeAws_json1_1CoverageCost(
      output.CoverageCost,
      context
    );
  }
  if (output.CoverageHours !== undefined) {
    contents.CoverageHours = deserializeAws_json1_1CoverageHours(
      output.CoverageHours,
      context
    );
  }
  if (output.CoverageNormalizedUnits !== undefined) {
    contents.CoverageNormalizedUnits = deserializeAws_json1_1CoverageNormalizedUnits(
      output.CoverageNormalizedUnits,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CoverageByTime = (
  output: any,
  context: __SerdeContext
): CoverageByTime => {
  let contents: any = {
    __type: "CoverageByTime",
    Groups: undefined,
    TimePeriod: undefined,
    Total: undefined
  };
  if (output.Groups !== undefined) {
    contents.Groups = deserializeAws_json1_1ReservationCoverageGroups(
      output.Groups,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1Coverage(output.Total, context);
  }
  return contents;
};

const deserializeAws_json1_1CoverageCost = (
  output: any,
  context: __SerdeContext
): CoverageCost => {
  let contents: any = {
    __type: "CoverageCost",
    OnDemandCost: undefined
  };
  if (output.OnDemandCost !== undefined) {
    contents.OnDemandCost = output.OnDemandCost;
  }
  return contents;
};

const deserializeAws_json1_1CoverageHours = (
  output: any,
  context: __SerdeContext
): CoverageHours => {
  let contents: any = {
    __type: "CoverageHours",
    CoverageHoursPercentage: undefined,
    OnDemandHours: undefined,
    ReservedHours: undefined,
    TotalRunningHours: undefined
  };
  if (output.CoverageHoursPercentage !== undefined) {
    contents.CoverageHoursPercentage = output.CoverageHoursPercentage;
  }
  if (output.OnDemandHours !== undefined) {
    contents.OnDemandHours = output.OnDemandHours;
  }
  if (output.ReservedHours !== undefined) {
    contents.ReservedHours = output.ReservedHours;
  }
  if (output.TotalRunningHours !== undefined) {
    contents.TotalRunningHours = output.TotalRunningHours;
  }
  return contents;
};

const deserializeAws_json1_1CoverageNormalizedUnits = (
  output: any,
  context: __SerdeContext
): CoverageNormalizedUnits => {
  let contents: any = {
    __type: "CoverageNormalizedUnits",
    CoverageNormalizedUnitsPercentage: undefined,
    OnDemandNormalizedUnits: undefined,
    ReservedNormalizedUnits: undefined,
    TotalRunningNormalizedUnits: undefined
  };
  if (output.CoverageNormalizedUnitsPercentage !== undefined) {
    contents.CoverageNormalizedUnitsPercentage =
      output.CoverageNormalizedUnitsPercentage;
  }
  if (output.OnDemandNormalizedUnits !== undefined) {
    contents.OnDemandNormalizedUnits = output.OnDemandNormalizedUnits;
  }
  if (output.ReservedNormalizedUnits !== undefined) {
    contents.ReservedNormalizedUnits = output.ReservedNormalizedUnits;
  }
  if (output.TotalRunningNormalizedUnits !== undefined) {
    contents.TotalRunningNormalizedUnits = output.TotalRunningNormalizedUnits;
  }
  return contents;
};

const deserializeAws_json1_1CoveragesByTime = (
  output: any,
  context: __SerdeContext
): Array<CoverageByTime> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CoverageByTime(entry, context)
  );
};

const deserializeAws_json1_1CreateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateCostCategoryDefinitionResponse => {
  let contents: any = {
    __type: "CreateCostCategoryDefinitionResponse",
    CostCategoryArn: undefined,
    EffectiveStart: undefined
  };
  if (output.CostCategoryArn !== undefined) {
    contents.CostCategoryArn = output.CostCategoryArn;
  }
  if (output.EffectiveStart !== undefined) {
    contents.EffectiveStart = output.EffectiveStart;
  }
  return contents;
};

const deserializeAws_json1_1CurrentInstance = (
  output: any,
  context: __SerdeContext
): CurrentInstance => {
  let contents: any = {
    __type: "CurrentInstance",
    CurrencyCode: undefined,
    MonthlyCost: undefined,
    OnDemandHoursInLookbackPeriod: undefined,
    ReservationCoveredHoursInLookbackPeriod: undefined,
    ResourceDetails: undefined,
    ResourceId: undefined,
    ResourceUtilization: undefined,
    SavingsPlansCoveredHoursInLookbackPeriod: undefined,
    Tags: undefined,
    TotalRunningHoursInLookbackPeriod: undefined
  };
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.MonthlyCost !== undefined) {
    contents.MonthlyCost = output.MonthlyCost;
  }
  if (output.OnDemandHoursInLookbackPeriod !== undefined) {
    contents.OnDemandHoursInLookbackPeriod =
      output.OnDemandHoursInLookbackPeriod;
  }
  if (output.ReservationCoveredHoursInLookbackPeriod !== undefined) {
    contents.ReservationCoveredHoursInLookbackPeriod =
      output.ReservationCoveredHoursInLookbackPeriod;
  }
  if (output.ResourceDetails !== undefined) {
    contents.ResourceDetails = deserializeAws_json1_1ResourceDetails(
      output.ResourceDetails,
      context
    );
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ResourceUtilization !== undefined) {
    contents.ResourceUtilization = deserializeAws_json1_1ResourceUtilization(
      output.ResourceUtilization,
      context
    );
  }
  if (output.SavingsPlansCoveredHoursInLookbackPeriod !== undefined) {
    contents.SavingsPlansCoveredHoursInLookbackPeriod =
      output.SavingsPlansCoveredHoursInLookbackPeriod;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagValuesList(output.Tags, context);
  }
  if (output.TotalRunningHoursInLookbackPeriod !== undefined) {
    contents.TotalRunningHoursInLookbackPeriod =
      output.TotalRunningHoursInLookbackPeriod;
  }
  return contents;
};

const deserializeAws_json1_1DataUnavailableException = (
  output: any,
  context: __SerdeContext
): DataUnavailableException => {
  let contents: any = {
    __type: "DataUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DateInterval = (
  output: any,
  context: __SerdeContext
): DateInterval => {
  let contents: any = {
    __type: "DateInterval",
    End: undefined,
    Start: undefined
  };
  if (output.End !== undefined) {
    contents.End = output.End;
  }
  if (output.Start !== undefined) {
    contents.Start = output.Start;
  }
  return contents;
};

const deserializeAws_json1_1DeleteCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCostCategoryDefinitionResponse => {
  let contents: any = {
    __type: "DeleteCostCategoryDefinitionResponse",
    CostCategoryArn: undefined,
    EffectiveEnd: undefined
  };
  if (output.CostCategoryArn !== undefined) {
    contents.CostCategoryArn = output.CostCategoryArn;
  }
  if (output.EffectiveEnd !== undefined) {
    contents.EffectiveEnd = output.EffectiveEnd;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCostCategoryDefinitionResponse => {
  let contents: any = {
    __type: "DescribeCostCategoryDefinitionResponse",
    CostCategory: undefined
  };
  if (output.CostCategory !== undefined) {
    contents.CostCategory = deserializeAws_json1_1CostCategory(
      output.CostCategory,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DimensionValues = (
  output: any,
  context: __SerdeContext
): DimensionValues => {
  let contents: any = {
    __type: "DimensionValues",
    Key: undefined,
    Values: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Values !== undefined) {
    contents.Values = deserializeAws_json1_1Values(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1DimensionValuesWithAttributes = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes => {
  let contents: any = {
    __type: "DimensionValuesWithAttributes",
    Attributes: undefined,
    Value: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1DimensionValuesWithAttributesList = (
  output: any,
  context: __SerdeContext
): Array<DimensionValuesWithAttributes> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DimensionValuesWithAttributes(entry, context)
  );
};

const deserializeAws_json1_1EC2InstanceDetails = (
  output: any,
  context: __SerdeContext
): EC2InstanceDetails => {
  let contents: any = {
    __type: "EC2InstanceDetails",
    AvailabilityZone: undefined,
    CurrentGeneration: undefined,
    Family: undefined,
    InstanceType: undefined,
    Platform: undefined,
    Region: undefined,
    SizeFlexEligible: undefined,
    Tenancy: undefined
  };
  if (output.AvailabilityZone !== undefined) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.CurrentGeneration !== undefined) {
    contents.CurrentGeneration = output.CurrentGeneration;
  }
  if (output.Family !== undefined) {
    contents.Family = output.Family;
  }
  if (output.InstanceType !== undefined) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.Platform !== undefined) {
    contents.Platform = output.Platform;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.SizeFlexEligible !== undefined) {
    contents.SizeFlexEligible = output.SizeFlexEligible;
  }
  if (output.Tenancy !== undefined) {
    contents.Tenancy = output.Tenancy;
  }
  return contents;
};

const deserializeAws_json1_1EC2ResourceDetails = (
  output: any,
  context: __SerdeContext
): EC2ResourceDetails => {
  let contents: any = {
    __type: "EC2ResourceDetails",
    HourlyOnDemandRate: undefined,
    InstanceType: undefined,
    Memory: undefined,
    NetworkPerformance: undefined,
    Platform: undefined,
    Region: undefined,
    Sku: undefined,
    Storage: undefined,
    Vcpu: undefined
  };
  if (output.HourlyOnDemandRate !== undefined) {
    contents.HourlyOnDemandRate = output.HourlyOnDemandRate;
  }
  if (output.InstanceType !== undefined) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.Memory !== undefined) {
    contents.Memory = output.Memory;
  }
  if (output.NetworkPerformance !== undefined) {
    contents.NetworkPerformance = output.NetworkPerformance;
  }
  if (output.Platform !== undefined) {
    contents.Platform = output.Platform;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.Sku !== undefined) {
    contents.Sku = output.Sku;
  }
  if (output.Storage !== undefined) {
    contents.Storage = output.Storage;
  }
  if (output.Vcpu !== undefined) {
    contents.Vcpu = output.Vcpu;
  }
  return contents;
};

const deserializeAws_json1_1EC2ResourceUtilization = (
  output: any,
  context: __SerdeContext
): EC2ResourceUtilization => {
  let contents: any = {
    __type: "EC2ResourceUtilization",
    MaxCpuUtilizationPercentage: undefined,
    MaxMemoryUtilizationPercentage: undefined,
    MaxStorageUtilizationPercentage: undefined
  };
  if (output.MaxCpuUtilizationPercentage !== undefined) {
    contents.MaxCpuUtilizationPercentage = output.MaxCpuUtilizationPercentage;
  }
  if (output.MaxMemoryUtilizationPercentage !== undefined) {
    contents.MaxMemoryUtilizationPercentage =
      output.MaxMemoryUtilizationPercentage;
  }
  if (output.MaxStorageUtilizationPercentage !== undefined) {
    contents.MaxStorageUtilizationPercentage =
      output.MaxStorageUtilizationPercentage;
  }
  return contents;
};

const deserializeAws_json1_1EC2Specification = (
  output: any,
  context: __SerdeContext
): EC2Specification => {
  let contents: any = {
    __type: "EC2Specification",
    OfferingClass: undefined
  };
  if (output.OfferingClass !== undefined) {
    contents.OfferingClass = output.OfferingClass;
  }
  return contents;
};

const deserializeAws_json1_1ESInstanceDetails = (
  output: any,
  context: __SerdeContext
): ESInstanceDetails => {
  let contents: any = {
    __type: "ESInstanceDetails",
    CurrentGeneration: undefined,
    InstanceClass: undefined,
    InstanceSize: undefined,
    Region: undefined,
    SizeFlexEligible: undefined
  };
  if (output.CurrentGeneration !== undefined) {
    contents.CurrentGeneration = output.CurrentGeneration;
  }
  if (output.InstanceClass !== undefined) {
    contents.InstanceClass = output.InstanceClass;
  }
  if (output.InstanceSize !== undefined) {
    contents.InstanceSize = output.InstanceSize;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.SizeFlexEligible !== undefined) {
    contents.SizeFlexEligible = output.SizeFlexEligible;
  }
  return contents;
};

const deserializeAws_json1_1ElastiCacheInstanceDetails = (
  output: any,
  context: __SerdeContext
): ElastiCacheInstanceDetails => {
  let contents: any = {
    __type: "ElastiCacheInstanceDetails",
    CurrentGeneration: undefined,
    Family: undefined,
    NodeType: undefined,
    ProductDescription: undefined,
    Region: undefined,
    SizeFlexEligible: undefined
  };
  if (output.CurrentGeneration !== undefined) {
    contents.CurrentGeneration = output.CurrentGeneration;
  }
  if (output.Family !== undefined) {
    contents.Family = output.Family;
  }
  if (output.NodeType !== undefined) {
    contents.NodeType = output.NodeType;
  }
  if (output.ProductDescription !== undefined) {
    contents.ProductDescription = output.ProductDescription;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.SizeFlexEligible !== undefined) {
    contents.SizeFlexEligible = output.SizeFlexEligible;
  }
  return contents;
};

const deserializeAws_json1_1Expression = (
  output: any,
  context: __SerdeContext
): Expression => {
  let contents: any = {
    __type: "Expression",
    And: undefined,
    CostCategories: undefined,
    Dimensions: undefined,
    Not: undefined,
    Or: undefined,
    Tags: undefined
  };
  if (output.And !== undefined) {
    contents.And = deserializeAws_json1_1Expressions(output.And, context);
  }
  if (output.CostCategories !== undefined) {
    contents.CostCategories = deserializeAws_json1_1CostCategoryValues(
      output.CostCategories,
      context
    );
  }
  if (output.Dimensions !== undefined) {
    contents.Dimensions = deserializeAws_json1_1DimensionValues(
      output.Dimensions,
      context
    );
  }
  if (output.Not !== undefined) {
    contents.Not = deserializeAws_json1_1Expression(output.Not, context);
  }
  if (output.Or !== undefined) {
    contents.Or = deserializeAws_json1_1Expressions(output.Or, context);
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagValues(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1Expressions = (
  output: any,
  context: __SerdeContext
): Array<Expression> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Expression(entry, context)
  );
};

const deserializeAws_json1_1ForecastResult = (
  output: any,
  context: __SerdeContext
): ForecastResult => {
  let contents: any = {
    __type: "ForecastResult",
    MeanValue: undefined,
    PredictionIntervalLowerBound: undefined,
    PredictionIntervalUpperBound: undefined,
    TimePeriod: undefined
  };
  if (output.MeanValue !== undefined) {
    contents.MeanValue = output.MeanValue;
  }
  if (output.PredictionIntervalLowerBound !== undefined) {
    contents.PredictionIntervalLowerBound = output.PredictionIntervalLowerBound;
  }
  if (output.PredictionIntervalUpperBound !== undefined) {
    contents.PredictionIntervalUpperBound = output.PredictionIntervalUpperBound;
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ForecastResultsByTime = (
  output: any,
  context: __SerdeContext
): Array<ForecastResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ForecastResult(entry, context)
  );
};

const deserializeAws_json1_1GetCostAndUsageResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageResponse => {
  let contents: any = {
    __type: "GetCostAndUsageResponse",
    GroupDefinitions: undefined,
    NextPageToken: undefined,
    ResultsByTime: undefined
  };
  if (output.GroupDefinitions !== undefined) {
    contents.GroupDefinitions = deserializeAws_json1_1GroupDefinitions(
      output.GroupDefinitions,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.ResultsByTime !== undefined) {
    contents.ResultsByTime = deserializeAws_json1_1ResultsByTime(
      output.ResultsByTime,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageWithResourcesResponse => {
  let contents: any = {
    __type: "GetCostAndUsageWithResourcesResponse",
    GroupDefinitions: undefined,
    NextPageToken: undefined,
    ResultsByTime: undefined
  };
  if (output.GroupDefinitions !== undefined) {
    contents.GroupDefinitions = deserializeAws_json1_1GroupDefinitions(
      output.GroupDefinitions,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.ResultsByTime !== undefined) {
    contents.ResultsByTime = deserializeAws_json1_1ResultsByTime(
      output.ResultsByTime,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetCostForecastResponse = (
  output: any,
  context: __SerdeContext
): GetCostForecastResponse => {
  let contents: any = {
    __type: "GetCostForecastResponse",
    ForecastResultsByTime: undefined,
    Total: undefined
  };
  if (output.ForecastResultsByTime !== undefined) {
    contents.ForecastResultsByTime = deserializeAws_json1_1ForecastResultsByTime(
      output.ForecastResultsByTime,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1MetricValue(output.Total, context);
  }
  return contents;
};

const deserializeAws_json1_1GetDimensionValuesResponse = (
  output: any,
  context: __SerdeContext
): GetDimensionValuesResponse => {
  let contents: any = {
    __type: "GetDimensionValuesResponse",
    DimensionValues: undefined,
    NextPageToken: undefined,
    ReturnSize: undefined,
    TotalSize: undefined
  };
  if (output.DimensionValues !== undefined) {
    contents.DimensionValues = deserializeAws_json1_1DimensionValuesWithAttributesList(
      output.DimensionValues,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.ReturnSize !== undefined) {
    contents.ReturnSize = output.ReturnSize;
  }
  if (output.TotalSize !== undefined) {
    contents.TotalSize = output.TotalSize;
  }
  return contents;
};

const deserializeAws_json1_1GetReservationCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetReservationCoverageResponse => {
  let contents: any = {
    __type: "GetReservationCoverageResponse",
    CoveragesByTime: undefined,
    NextPageToken: undefined,
    Total: undefined
  };
  if (output.CoveragesByTime !== undefined) {
    contents.CoveragesByTime = deserializeAws_json1_1CoveragesByTime(
      output.CoveragesByTime,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1Coverage(output.Total, context);
  }
  return contents;
};

const deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationPurchaseRecommendationResponse => {
  let contents: any = {
    __type: "GetReservationPurchaseRecommendationResponse",
    Metadata: undefined,
    NextPageToken: undefined,
    Recommendations: undefined
  };
  if (output.Metadata !== undefined) {
    contents.Metadata = deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(
      output.Metadata,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.Recommendations !== undefined) {
    contents.Recommendations = deserializeAws_json1_1ReservationPurchaseRecommendations(
      output.Recommendations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetReservationUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationUtilizationResponse => {
  let contents: any = {
    __type: "GetReservationUtilizationResponse",
    NextPageToken: undefined,
    Total: undefined,
    UtilizationsByTime: undefined
  };
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1ReservationAggregates(
      output.Total,
      context
    );
  }
  if (output.UtilizationsByTime !== undefined) {
    contents.UtilizationsByTime = deserializeAws_json1_1UtilizationsByTime(
      output.UtilizationsByTime,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRightsizingRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetRightsizingRecommendationResponse => {
  let contents: any = {
    __type: "GetRightsizingRecommendationResponse",
    Metadata: undefined,
    NextPageToken: undefined,
    RightsizingRecommendations: undefined,
    Summary: undefined
  };
  if (output.Metadata !== undefined) {
    contents.Metadata = deserializeAws_json1_1RightsizingRecommendationMetadata(
      output.Metadata,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.RightsizingRecommendations !== undefined) {
    contents.RightsizingRecommendations = deserializeAws_json1_1RightsizingRecommendationList(
      output.RightsizingRecommendations,
      context
    );
  }
  if (output.Summary !== undefined) {
    contents.Summary = deserializeAws_json1_1RightsizingRecommendationSummary(
      output.Summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSavingsPlansCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansCoverageResponse => {
  let contents: any = {
    __type: "GetSavingsPlansCoverageResponse",
    NextToken: undefined,
    SavingsPlansCoverages: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.SavingsPlansCoverages !== undefined) {
    contents.SavingsPlansCoverages = deserializeAws_json1_1SavingsPlansCoverages(
      output.SavingsPlansCoverages,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansPurchaseRecommendationResponse => {
  let contents: any = {
    __type: "GetSavingsPlansPurchaseRecommendationResponse",
    Metadata: undefined,
    NextPageToken: undefined,
    SavingsPlansPurchaseRecommendation: undefined
  };
  if (output.Metadata !== undefined) {
    contents.Metadata = deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(
      output.Metadata,
      context
    );
  }
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.SavingsPlansPurchaseRecommendation !== undefined) {
    contents.SavingsPlansPurchaseRecommendation = deserializeAws_json1_1SavingsPlansPurchaseRecommendation(
      output.SavingsPlansPurchaseRecommendation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationDetailsResponse => {
  let contents: any = {
    __type: "GetSavingsPlansUtilizationDetailsResponse",
    NextToken: undefined,
    SavingsPlansUtilizationDetails: undefined,
    TimePeriod: undefined,
    Total: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.SavingsPlansUtilizationDetails !== undefined) {
    contents.SavingsPlansUtilizationDetails = deserializeAws_json1_1SavingsPlansUtilizationDetails(
      output.SavingsPlansUtilizationDetails,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1SavingsPlansUtilizationAggregates(
      output.Total,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationResponse => {
  let contents: any = {
    __type: "GetSavingsPlansUtilizationResponse",
    SavingsPlansUtilizationsByTime: undefined,
    Total: undefined
  };
  if (output.SavingsPlansUtilizationsByTime !== undefined) {
    contents.SavingsPlansUtilizationsByTime = deserializeAws_json1_1SavingsPlansUtilizationsByTime(
      output.SavingsPlansUtilizationsByTime,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1SavingsPlansUtilizationAggregates(
      output.Total,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetTagsResponse = (
  output: any,
  context: __SerdeContext
): GetTagsResponse => {
  let contents: any = {
    __type: "GetTagsResponse",
    NextPageToken: undefined,
    ReturnSize: undefined,
    Tags: undefined,
    TotalSize: undefined
  };
  if (output.NextPageToken !== undefined) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.ReturnSize !== undefined) {
    contents.ReturnSize = output.ReturnSize;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  if (output.TotalSize !== undefined) {
    contents.TotalSize = output.TotalSize;
  }
  return contents;
};

const deserializeAws_json1_1GetUsageForecastResponse = (
  output: any,
  context: __SerdeContext
): GetUsageForecastResponse => {
  let contents: any = {
    __type: "GetUsageForecastResponse",
    ForecastResultsByTime: undefined,
    Total: undefined
  };
  if (output.ForecastResultsByTime !== undefined) {
    contents.ForecastResultsByTime = deserializeAws_json1_1ForecastResultsByTime(
      output.ForecastResultsByTime,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1MetricValue(output.Total, context);
  }
  return contents;
};

const deserializeAws_json1_1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  let contents: any = {
    __type: "Group",
    Keys: undefined,
    Metrics: undefined
  };
  if (output.Keys !== undefined) {
    contents.Keys = deserializeAws_json1_1Keys(output.Keys, context);
  }
  if (output.Metrics !== undefined) {
    contents.Metrics = deserializeAws_json1_1Metrics(output.Metrics, context);
  }
  return contents;
};

const deserializeAws_json1_1GroupDefinition = (
  output: any,
  context: __SerdeContext
): GroupDefinition => {
  let contents: any = {
    __type: "GroupDefinition",
    Key: undefined,
    Type: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1GroupDefinitions = (
  output: any,
  context: __SerdeContext
): Array<GroupDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1GroupDefinition(entry, context)
  );
};

const deserializeAws_json1_1Groups = (
  output: any,
  context: __SerdeContext
): Array<Group> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Group(entry, context)
  );
};

const deserializeAws_json1_1InstanceDetails = (
  output: any,
  context: __SerdeContext
): InstanceDetails => {
  let contents: any = {
    __type: "InstanceDetails",
    EC2InstanceDetails: undefined,
    ESInstanceDetails: undefined,
    ElastiCacheInstanceDetails: undefined,
    RDSInstanceDetails: undefined,
    RedshiftInstanceDetails: undefined
  };
  if (output.EC2InstanceDetails !== undefined) {
    contents.EC2InstanceDetails = deserializeAws_json1_1EC2InstanceDetails(
      output.EC2InstanceDetails,
      context
    );
  }
  if (output.ESInstanceDetails !== undefined) {
    contents.ESInstanceDetails = deserializeAws_json1_1ESInstanceDetails(
      output.ESInstanceDetails,
      context
    );
  }
  if (output.ElastiCacheInstanceDetails !== undefined) {
    contents.ElastiCacheInstanceDetails = deserializeAws_json1_1ElastiCacheInstanceDetails(
      output.ElastiCacheInstanceDetails,
      context
    );
  }
  if (output.RDSInstanceDetails !== undefined) {
    contents.RDSInstanceDetails = deserializeAws_json1_1RDSInstanceDetails(
      output.RDSInstanceDetails,
      context
    );
  }
  if (output.RedshiftInstanceDetails !== undefined) {
    contents.RedshiftInstanceDetails = deserializeAws_json1_1RedshiftInstanceDetails(
      output.RedshiftInstanceDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Keys = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListCostCategoryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListCostCategoryDefinitionsResponse => {
  let contents: any = {
    __type: "ListCostCategoryDefinitionsResponse",
    CostCategoryReferences: undefined,
    NextToken: undefined
  };
  if (output.CostCategoryReferences !== undefined) {
    contents.CostCategoryReferences = deserializeAws_json1_1CostCategoryReferencesList(
      output.CostCategoryReferences,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1MetricValue = (
  output: any,
  context: __SerdeContext
): MetricValue => {
  let contents: any = {
    __type: "MetricValue",
    Amount: undefined,
    Unit: undefined
  };
  if (output.Amount !== undefined) {
    contents.Amount = output.Amount;
  }
  if (output.Unit !== undefined) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1Metrics = (
  output: any,
  context: __SerdeContext
): { [key: string]: MetricValue } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1MetricValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1ModifyRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ModifyRecommendationDetail => {
  let contents: any = {
    __type: "ModifyRecommendationDetail",
    TargetInstances: undefined
  };
  if (output.TargetInstances !== undefined) {
    contents.TargetInstances = deserializeAws_json1_1TargetInstancesList(
      output.TargetInstances,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RDSInstanceDetails = (
  output: any,
  context: __SerdeContext
): RDSInstanceDetails => {
  let contents: any = {
    __type: "RDSInstanceDetails",
    CurrentGeneration: undefined,
    DatabaseEdition: undefined,
    DatabaseEngine: undefined,
    DeploymentOption: undefined,
    Family: undefined,
    InstanceType: undefined,
    LicenseModel: undefined,
    Region: undefined,
    SizeFlexEligible: undefined
  };
  if (output.CurrentGeneration !== undefined) {
    contents.CurrentGeneration = output.CurrentGeneration;
  }
  if (output.DatabaseEdition !== undefined) {
    contents.DatabaseEdition = output.DatabaseEdition;
  }
  if (output.DatabaseEngine !== undefined) {
    contents.DatabaseEngine = output.DatabaseEngine;
  }
  if (output.DeploymentOption !== undefined) {
    contents.DeploymentOption = output.DeploymentOption;
  }
  if (output.Family !== undefined) {
    contents.Family = output.Family;
  }
  if (output.InstanceType !== undefined) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.LicenseModel !== undefined) {
    contents.LicenseModel = output.LicenseModel;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.SizeFlexEligible !== undefined) {
    contents.SizeFlexEligible = output.SizeFlexEligible;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftInstanceDetails = (
  output: any,
  context: __SerdeContext
): RedshiftInstanceDetails => {
  let contents: any = {
    __type: "RedshiftInstanceDetails",
    CurrentGeneration: undefined,
    Family: undefined,
    NodeType: undefined,
    Region: undefined,
    SizeFlexEligible: undefined
  };
  if (output.CurrentGeneration !== undefined) {
    contents.CurrentGeneration = output.CurrentGeneration;
  }
  if (output.Family !== undefined) {
    contents.Family = output.Family;
  }
  if (output.NodeType !== undefined) {
    contents.NodeType = output.NodeType;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  if (output.SizeFlexEligible !== undefined) {
    contents.SizeFlexEligible = output.SizeFlexEligible;
  }
  return contents;
};

const deserializeAws_json1_1RequestChangedException = (
  output: any,
  context: __SerdeContext
): RequestChangedException => {
  let contents: any = {
    __type: "RequestChangedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ReservationAggregates = (
  output: any,
  context: __SerdeContext
): ReservationAggregates => {
  let contents: any = {
    __type: "ReservationAggregates",
    AmortizedRecurringFee: undefined,
    AmortizedUpfrontFee: undefined,
    NetRISavings: undefined,
    OnDemandCostOfRIHoursUsed: undefined,
    PurchasedHours: undefined,
    PurchasedUnits: undefined,
    TotalActualHours: undefined,
    TotalActualUnits: undefined,
    TotalAmortizedFee: undefined,
    TotalPotentialRISavings: undefined,
    UnusedHours: undefined,
    UnusedUnits: undefined,
    UtilizationPercentage: undefined,
    UtilizationPercentageInUnits: undefined
  };
  if (output.AmortizedRecurringFee !== undefined) {
    contents.AmortizedRecurringFee = output.AmortizedRecurringFee;
  }
  if (output.AmortizedUpfrontFee !== undefined) {
    contents.AmortizedUpfrontFee = output.AmortizedUpfrontFee;
  }
  if (output.NetRISavings !== undefined) {
    contents.NetRISavings = output.NetRISavings;
  }
  if (output.OnDemandCostOfRIHoursUsed !== undefined) {
    contents.OnDemandCostOfRIHoursUsed = output.OnDemandCostOfRIHoursUsed;
  }
  if (output.PurchasedHours !== undefined) {
    contents.PurchasedHours = output.PurchasedHours;
  }
  if (output.PurchasedUnits !== undefined) {
    contents.PurchasedUnits = output.PurchasedUnits;
  }
  if (output.TotalActualHours !== undefined) {
    contents.TotalActualHours = output.TotalActualHours;
  }
  if (output.TotalActualUnits !== undefined) {
    contents.TotalActualUnits = output.TotalActualUnits;
  }
  if (output.TotalAmortizedFee !== undefined) {
    contents.TotalAmortizedFee = output.TotalAmortizedFee;
  }
  if (output.TotalPotentialRISavings !== undefined) {
    contents.TotalPotentialRISavings = output.TotalPotentialRISavings;
  }
  if (output.UnusedHours !== undefined) {
    contents.UnusedHours = output.UnusedHours;
  }
  if (output.UnusedUnits !== undefined) {
    contents.UnusedUnits = output.UnusedUnits;
  }
  if (output.UtilizationPercentage !== undefined) {
    contents.UtilizationPercentage = output.UtilizationPercentage;
  }
  if (output.UtilizationPercentageInUnits !== undefined) {
    contents.UtilizationPercentageInUnits = output.UtilizationPercentageInUnits;
  }
  return contents;
};

const deserializeAws_json1_1ReservationCoverageGroup = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup => {
  let contents: any = {
    __type: "ReservationCoverageGroup",
    Attributes: undefined,
    Coverage: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.Coverage !== undefined) {
    contents.Coverage = deserializeAws_json1_1Coverage(
      output.Coverage,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ReservationCoverageGroups = (
  output: any,
  context: __SerdeContext
): Array<ReservationCoverageGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationCoverageGroup(entry, context)
  );
};

const deserializeAws_json1_1ReservationPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation => {
  let contents: any = {
    __type: "ReservationPurchaseRecommendation",
    AccountScope: undefined,
    LookbackPeriodInDays: undefined,
    PaymentOption: undefined,
    RecommendationDetails: undefined,
    RecommendationSummary: undefined,
    ServiceSpecification: undefined,
    TermInYears: undefined
  };
  if (output.AccountScope !== undefined) {
    contents.AccountScope = output.AccountScope;
  }
  if (output.LookbackPeriodInDays !== undefined) {
    contents.LookbackPeriodInDays = output.LookbackPeriodInDays;
  }
  if (output.PaymentOption !== undefined) {
    contents.PaymentOption = output.PaymentOption;
  }
  if (output.RecommendationDetails !== undefined) {
    contents.RecommendationDetails = deserializeAws_json1_1ReservationPurchaseRecommendationDetails(
      output.RecommendationDetails,
      context
    );
  }
  if (output.RecommendationSummary !== undefined) {
    contents.RecommendationSummary = deserializeAws_json1_1ReservationPurchaseRecommendationSummary(
      output.RecommendationSummary,
      context
    );
  }
  if (output.ServiceSpecification !== undefined) {
    contents.ServiceSpecification = deserializeAws_json1_1ServiceSpecification(
      output.ServiceSpecification,
      context
    );
  }
  if (output.TermInYears !== undefined) {
    contents.TermInYears = output.TermInYears;
  }
  return contents;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail => {
  let contents: any = {
    __type: "ReservationPurchaseRecommendationDetail",
    AccountId: undefined,
    AverageNormalizedUnitsUsedPerHour: undefined,
    AverageNumberOfInstancesUsedPerHour: undefined,
    AverageUtilization: undefined,
    CurrencyCode: undefined,
    EstimatedBreakEvenInMonths: undefined,
    EstimatedMonthlyOnDemandCost: undefined,
    EstimatedMonthlySavingsAmount: undefined,
    EstimatedMonthlySavingsPercentage: undefined,
    EstimatedReservationCostForLookbackPeriod: undefined,
    InstanceDetails: undefined,
    MaximumNormalizedUnitsUsedPerHour: undefined,
    MaximumNumberOfInstancesUsedPerHour: undefined,
    MinimumNormalizedUnitsUsedPerHour: undefined,
    MinimumNumberOfInstancesUsedPerHour: undefined,
    RecommendedNormalizedUnitsToPurchase: undefined,
    RecommendedNumberOfInstancesToPurchase: undefined,
    RecurringStandardMonthlyCost: undefined,
    UpfrontCost: undefined
  };
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.AverageNormalizedUnitsUsedPerHour !== undefined) {
    contents.AverageNormalizedUnitsUsedPerHour =
      output.AverageNormalizedUnitsUsedPerHour;
  }
  if (output.AverageNumberOfInstancesUsedPerHour !== undefined) {
    contents.AverageNumberOfInstancesUsedPerHour =
      output.AverageNumberOfInstancesUsedPerHour;
  }
  if (output.AverageUtilization !== undefined) {
    contents.AverageUtilization = output.AverageUtilization;
  }
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.EstimatedBreakEvenInMonths !== undefined) {
    contents.EstimatedBreakEvenInMonths = output.EstimatedBreakEvenInMonths;
  }
  if (output.EstimatedMonthlyOnDemandCost !== undefined) {
    contents.EstimatedMonthlyOnDemandCost = output.EstimatedMonthlyOnDemandCost;
  }
  if (output.EstimatedMonthlySavingsAmount !== undefined) {
    contents.EstimatedMonthlySavingsAmount =
      output.EstimatedMonthlySavingsAmount;
  }
  if (output.EstimatedMonthlySavingsPercentage !== undefined) {
    contents.EstimatedMonthlySavingsPercentage =
      output.EstimatedMonthlySavingsPercentage;
  }
  if (output.EstimatedReservationCostForLookbackPeriod !== undefined) {
    contents.EstimatedReservationCostForLookbackPeriod =
      output.EstimatedReservationCostForLookbackPeriod;
  }
  if (output.InstanceDetails !== undefined) {
    contents.InstanceDetails = deserializeAws_json1_1InstanceDetails(
      output.InstanceDetails,
      context
    );
  }
  if (output.MaximumNormalizedUnitsUsedPerHour !== undefined) {
    contents.MaximumNormalizedUnitsUsedPerHour =
      output.MaximumNormalizedUnitsUsedPerHour;
  }
  if (output.MaximumNumberOfInstancesUsedPerHour !== undefined) {
    contents.MaximumNumberOfInstancesUsedPerHour =
      output.MaximumNumberOfInstancesUsedPerHour;
  }
  if (output.MinimumNormalizedUnitsUsedPerHour !== undefined) {
    contents.MinimumNormalizedUnitsUsedPerHour =
      output.MinimumNormalizedUnitsUsedPerHour;
  }
  if (output.MinimumNumberOfInstancesUsedPerHour !== undefined) {
    contents.MinimumNumberOfInstancesUsedPerHour =
      output.MinimumNumberOfInstancesUsedPerHour;
  }
  if (output.RecommendedNormalizedUnitsToPurchase !== undefined) {
    contents.RecommendedNormalizedUnitsToPurchase =
      output.RecommendedNormalizedUnitsToPurchase;
  }
  if (output.RecommendedNumberOfInstancesToPurchase !== undefined) {
    contents.RecommendedNumberOfInstancesToPurchase =
      output.RecommendedNumberOfInstancesToPurchase;
  }
  if (output.RecurringStandardMonthlyCost !== undefined) {
    contents.RecurringStandardMonthlyCost = output.RecurringStandardMonthlyCost;
  }
  if (output.UpfrontCost !== undefined) {
    contents.UpfrontCost = output.UpfrontCost;
  }
  return contents;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetails = (
  output: any,
  context: __SerdeContext
): Array<ReservationPurchaseRecommendationDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationPurchaseRecommendationDetail(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationMetadata => {
  let contents: any = {
    __type: "ReservationPurchaseRecommendationMetadata",
    GenerationTimestamp: undefined,
    RecommendationId: undefined
  };
  if (output.GenerationTimestamp !== undefined) {
    contents.GenerationTimestamp = output.GenerationTimestamp;
  }
  if (output.RecommendationId !== undefined) {
    contents.RecommendationId = output.RecommendationId;
  }
  return contents;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationSummary => {
  let contents: any = {
    __type: "ReservationPurchaseRecommendationSummary",
    CurrencyCode: undefined,
    TotalEstimatedMonthlySavingsAmount: undefined,
    TotalEstimatedMonthlySavingsPercentage: undefined
  };
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.TotalEstimatedMonthlySavingsAmount !== undefined) {
    contents.TotalEstimatedMonthlySavingsAmount =
      output.TotalEstimatedMonthlySavingsAmount;
  }
  if (output.TotalEstimatedMonthlySavingsPercentage !== undefined) {
    contents.TotalEstimatedMonthlySavingsPercentage =
      output.TotalEstimatedMonthlySavingsPercentage;
  }
  return contents;
};

const deserializeAws_json1_1ReservationPurchaseRecommendations = (
  output: any,
  context: __SerdeContext
): Array<ReservationPurchaseRecommendation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context)
  );
};

const deserializeAws_json1_1ReservationUtilizationGroup = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup => {
  let contents: any = {
    __type: "ReservationUtilizationGroup",
    Attributes: undefined,
    Key: undefined,
    Utilization: undefined,
    Value: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Utilization !== undefined) {
    contents.Utilization = deserializeAws_json1_1ReservationAggregates(
      output.Utilization,
      context
    );
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1ReservationUtilizationGroups = (
  output: any,
  context: __SerdeContext
): Array<ReservationUtilizationGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationUtilizationGroup(entry, context)
  );
};

const deserializeAws_json1_1ResourceDetails = (
  output: any,
  context: __SerdeContext
): ResourceDetails => {
  let contents: any = {
    __type: "ResourceDetails",
    EC2ResourceDetails: undefined
  };
  if (output.EC2ResourceDetails !== undefined) {
    contents.EC2ResourceDetails = deserializeAws_json1_1EC2ResourceDetails(
      output.EC2ResourceDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceUtilization = (
  output: any,
  context: __SerdeContext
): ResourceUtilization => {
  let contents: any = {
    __type: "ResourceUtilization",
    EC2ResourceUtilization: undefined
  };
  if (output.EC2ResourceUtilization !== undefined) {
    contents.EC2ResourceUtilization = deserializeAws_json1_1EC2ResourceUtilization(
      output.EC2ResourceUtilization,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResultByTime = (
  output: any,
  context: __SerdeContext
): ResultByTime => {
  let contents: any = {
    __type: "ResultByTime",
    Estimated: undefined,
    Groups: undefined,
    TimePeriod: undefined,
    Total: undefined
  };
  if (output.Estimated !== undefined) {
    contents.Estimated = output.Estimated;
  }
  if (output.Groups !== undefined) {
    contents.Groups = deserializeAws_json1_1Groups(output.Groups, context);
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1Metrics(output.Total, context);
  }
  return contents;
};

const deserializeAws_json1_1ResultsByTime = (
  output: any,
  context: __SerdeContext
): Array<ResultByTime> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResultByTime(entry, context)
  );
};

const deserializeAws_json1_1RightsizingRecommendation = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation => {
  let contents: any = {
    __type: "RightsizingRecommendation",
    AccountId: undefined,
    CurrentInstance: undefined,
    ModifyRecommendationDetail: undefined,
    RightsizingType: undefined,
    TerminateRecommendationDetail: undefined
  };
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.CurrentInstance !== undefined) {
    contents.CurrentInstance = deserializeAws_json1_1CurrentInstance(
      output.CurrentInstance,
      context
    );
  }
  if (output.ModifyRecommendationDetail !== undefined) {
    contents.ModifyRecommendationDetail = deserializeAws_json1_1ModifyRecommendationDetail(
      output.ModifyRecommendationDetail,
      context
    );
  }
  if (output.RightsizingType !== undefined) {
    contents.RightsizingType = output.RightsizingType;
  }
  if (output.TerminateRecommendationDetail !== undefined) {
    contents.TerminateRecommendationDetail = deserializeAws_json1_1TerminateRecommendationDetail(
      output.TerminateRecommendationDetail,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RightsizingRecommendationList = (
  output: any,
  context: __SerdeContext
): Array<RightsizingRecommendation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RightsizingRecommendation(entry, context)
  );
};

const deserializeAws_json1_1RightsizingRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationMetadata => {
  let contents: any = {
    __type: "RightsizingRecommendationMetadata",
    GenerationTimestamp: undefined,
    LookbackPeriodInDays: undefined,
    RecommendationId: undefined
  };
  if (output.GenerationTimestamp !== undefined) {
    contents.GenerationTimestamp = output.GenerationTimestamp;
  }
  if (output.LookbackPeriodInDays !== undefined) {
    contents.LookbackPeriodInDays = output.LookbackPeriodInDays;
  }
  if (output.RecommendationId !== undefined) {
    contents.RecommendationId = output.RecommendationId;
  }
  return contents;
};

const deserializeAws_json1_1RightsizingRecommendationSummary = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationSummary => {
  let contents: any = {
    __type: "RightsizingRecommendationSummary",
    EstimatedTotalMonthlySavingsAmount: undefined,
    SavingsCurrencyCode: undefined,
    SavingsPercentage: undefined,
    TotalRecommendationCount: undefined
  };
  if (output.EstimatedTotalMonthlySavingsAmount !== undefined) {
    contents.EstimatedTotalMonthlySavingsAmount =
      output.EstimatedTotalMonthlySavingsAmount;
  }
  if (output.SavingsCurrencyCode !== undefined) {
    contents.SavingsCurrencyCode = output.SavingsCurrencyCode;
  }
  if (output.SavingsPercentage !== undefined) {
    contents.SavingsPercentage = output.SavingsPercentage;
  }
  if (output.TotalRecommendationCount !== undefined) {
    contents.TotalRecommendationCount = output.TotalRecommendationCount;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansAmortizedCommitment = (
  output: any,
  context: __SerdeContext
): SavingsPlansAmortizedCommitment => {
  let contents: any = {
    __type: "SavingsPlansAmortizedCommitment",
    AmortizedRecurringCommitment: undefined,
    AmortizedUpfrontCommitment: undefined,
    TotalAmortizedCommitment: undefined
  };
  if (output.AmortizedRecurringCommitment !== undefined) {
    contents.AmortizedRecurringCommitment = output.AmortizedRecurringCommitment;
  }
  if (output.AmortizedUpfrontCommitment !== undefined) {
    contents.AmortizedUpfrontCommitment = output.AmortizedUpfrontCommitment;
  }
  if (output.TotalAmortizedCommitment !== undefined) {
    contents.TotalAmortizedCommitment = output.TotalAmortizedCommitment;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansCoverage = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverage => {
  let contents: any = {
    __type: "SavingsPlansCoverage",
    Attributes: undefined,
    Coverage: undefined,
    TimePeriod: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.Coverage !== undefined) {
    contents.Coverage = deserializeAws_json1_1SavingsPlansCoverageData(
      output.Coverage,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansCoverageData = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverageData => {
  let contents: any = {
    __type: "SavingsPlansCoverageData",
    CoveragePercentage: undefined,
    OnDemandCost: undefined,
    SpendCoveredBySavingsPlans: undefined,
    TotalCost: undefined
  };
  if (output.CoveragePercentage !== undefined) {
    contents.CoveragePercentage = output.CoveragePercentage;
  }
  if (output.OnDemandCost !== undefined) {
    contents.OnDemandCost = output.OnDemandCost;
  }
  if (output.SpendCoveredBySavingsPlans !== undefined) {
    contents.SpendCoveredBySavingsPlans = output.SpendCoveredBySavingsPlans;
  }
  if (output.TotalCost !== undefined) {
    contents.TotalCost = output.TotalCost;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansCoverages = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlansCoverage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansCoverage(entry, context)
  );
};

const deserializeAws_json1_1SavingsPlansDetails = (
  output: any,
  context: __SerdeContext
): SavingsPlansDetails => {
  let contents: any = {
    __type: "SavingsPlansDetails",
    InstanceFamily: undefined,
    OfferingId: undefined,
    Region: undefined
  };
  if (output.InstanceFamily !== undefined) {
    contents.InstanceFamily = output.InstanceFamily;
  }
  if (output.OfferingId !== undefined) {
    contents.OfferingId = output.OfferingId;
  }
  if (output.Region !== undefined) {
    contents.Region = output.Region;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendation => {
  let contents: any = {
    __type: "SavingsPlansPurchaseRecommendation",
    LookbackPeriodInDays: undefined,
    PaymentOption: undefined,
    SavingsPlansPurchaseRecommendationDetails: undefined,
    SavingsPlansPurchaseRecommendationSummary: undefined,
    SavingsPlansType: undefined,
    TermInYears: undefined
  };
  if (output.LookbackPeriodInDays !== undefined) {
    contents.LookbackPeriodInDays = output.LookbackPeriodInDays;
  }
  if (output.PaymentOption !== undefined) {
    contents.PaymentOption = output.PaymentOption;
  }
  if (output.SavingsPlansPurchaseRecommendationDetails !== undefined) {
    contents.SavingsPlansPurchaseRecommendationDetails = deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(
      output.SavingsPlansPurchaseRecommendationDetails,
      context
    );
  }
  if (output.SavingsPlansPurchaseRecommendationSummary !== undefined) {
    contents.SavingsPlansPurchaseRecommendationSummary = deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(
      output.SavingsPlansPurchaseRecommendationSummary,
      context
    );
  }
  if (output.SavingsPlansType !== undefined) {
    contents.SavingsPlansType = output.SavingsPlansType;
  }
  if (output.TermInYears !== undefined) {
    contents.TermInYears = output.TermInYears;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail => {
  let contents: any = {
    __type: "SavingsPlansPurchaseRecommendationDetail",
    AccountId: undefined,
    CurrencyCode: undefined,
    CurrentAverageHourlyOnDemandSpend: undefined,
    CurrentMaximumHourlyOnDemandSpend: undefined,
    CurrentMinimumHourlyOnDemandSpend: undefined,
    EstimatedAverageUtilization: undefined,
    EstimatedMonthlySavingsAmount: undefined,
    EstimatedOnDemandCost: undefined,
    EstimatedOnDemandCostWithCurrentCommitment: undefined,
    EstimatedROI: undefined,
    EstimatedSPCost: undefined,
    EstimatedSavingsAmount: undefined,
    EstimatedSavingsPercentage: undefined,
    HourlyCommitmentToPurchase: undefined,
    SavingsPlansDetails: undefined,
    UpfrontCost: undefined
  };
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.CurrentAverageHourlyOnDemandSpend !== undefined) {
    contents.CurrentAverageHourlyOnDemandSpend =
      output.CurrentAverageHourlyOnDemandSpend;
  }
  if (output.CurrentMaximumHourlyOnDemandSpend !== undefined) {
    contents.CurrentMaximumHourlyOnDemandSpend =
      output.CurrentMaximumHourlyOnDemandSpend;
  }
  if (output.CurrentMinimumHourlyOnDemandSpend !== undefined) {
    contents.CurrentMinimumHourlyOnDemandSpend =
      output.CurrentMinimumHourlyOnDemandSpend;
  }
  if (output.EstimatedAverageUtilization !== undefined) {
    contents.EstimatedAverageUtilization = output.EstimatedAverageUtilization;
  }
  if (output.EstimatedMonthlySavingsAmount !== undefined) {
    contents.EstimatedMonthlySavingsAmount =
      output.EstimatedMonthlySavingsAmount;
  }
  if (output.EstimatedOnDemandCost !== undefined) {
    contents.EstimatedOnDemandCost = output.EstimatedOnDemandCost;
  }
  if (output.EstimatedOnDemandCostWithCurrentCommitment !== undefined) {
    contents.EstimatedOnDemandCostWithCurrentCommitment =
      output.EstimatedOnDemandCostWithCurrentCommitment;
  }
  if (output.EstimatedROI !== undefined) {
    contents.EstimatedROI = output.EstimatedROI;
  }
  if (output.EstimatedSPCost !== undefined) {
    contents.EstimatedSPCost = output.EstimatedSPCost;
  }
  if (output.EstimatedSavingsAmount !== undefined) {
    contents.EstimatedSavingsAmount = output.EstimatedSavingsAmount;
  }
  if (output.EstimatedSavingsPercentage !== undefined) {
    contents.EstimatedSavingsPercentage = output.EstimatedSavingsPercentage;
  }
  if (output.HourlyCommitmentToPurchase !== undefined) {
    contents.HourlyCommitmentToPurchase = output.HourlyCommitmentToPurchase;
  }
  if (output.SavingsPlansDetails !== undefined) {
    contents.SavingsPlansDetails = deserializeAws_json1_1SavingsPlansDetails(
      output.SavingsPlansDetails,
      context
    );
  }
  if (output.UpfrontCost !== undefined) {
    contents.UpfrontCost = output.UpfrontCost;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlansPurchaseRecommendationDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationMetadata => {
  let contents: any = {
    __type: "SavingsPlansPurchaseRecommendationMetadata",
    GenerationTimestamp: undefined,
    RecommendationId: undefined
  };
  if (output.GenerationTimestamp !== undefined) {
    contents.GenerationTimestamp = output.GenerationTimestamp;
  }
  if (output.RecommendationId !== undefined) {
    contents.RecommendationId = output.RecommendationId;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationSummary => {
  let contents: any = {
    __type: "SavingsPlansPurchaseRecommendationSummary",
    CurrencyCode: undefined,
    CurrentOnDemandSpend: undefined,
    DailyCommitmentToPurchase: undefined,
    EstimatedMonthlySavingsAmount: undefined,
    EstimatedOnDemandCostWithCurrentCommitment: undefined,
    EstimatedROI: undefined,
    EstimatedSavingsAmount: undefined,
    EstimatedSavingsPercentage: undefined,
    EstimatedTotalCost: undefined,
    HourlyCommitmentToPurchase: undefined,
    TotalRecommendationCount: undefined
  };
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.CurrentOnDemandSpend !== undefined) {
    contents.CurrentOnDemandSpend = output.CurrentOnDemandSpend;
  }
  if (output.DailyCommitmentToPurchase !== undefined) {
    contents.DailyCommitmentToPurchase = output.DailyCommitmentToPurchase;
  }
  if (output.EstimatedMonthlySavingsAmount !== undefined) {
    contents.EstimatedMonthlySavingsAmount =
      output.EstimatedMonthlySavingsAmount;
  }
  if (output.EstimatedOnDemandCostWithCurrentCommitment !== undefined) {
    contents.EstimatedOnDemandCostWithCurrentCommitment =
      output.EstimatedOnDemandCostWithCurrentCommitment;
  }
  if (output.EstimatedROI !== undefined) {
    contents.EstimatedROI = output.EstimatedROI;
  }
  if (output.EstimatedSavingsAmount !== undefined) {
    contents.EstimatedSavingsAmount = output.EstimatedSavingsAmount;
  }
  if (output.EstimatedSavingsPercentage !== undefined) {
    contents.EstimatedSavingsPercentage = output.EstimatedSavingsPercentage;
  }
  if (output.EstimatedTotalCost !== undefined) {
    contents.EstimatedTotalCost = output.EstimatedTotalCost;
  }
  if (output.HourlyCommitmentToPurchase !== undefined) {
    contents.HourlyCommitmentToPurchase = output.HourlyCommitmentToPurchase;
  }
  if (output.TotalRecommendationCount !== undefined) {
    contents.TotalRecommendationCount = output.TotalRecommendationCount;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansSavings = (
  output: any,
  context: __SerdeContext
): SavingsPlansSavings => {
  let contents: any = {
    __type: "SavingsPlansSavings",
    NetSavings: undefined,
    OnDemandCostEquivalent: undefined
  };
  if (output.NetSavings !== undefined) {
    contents.NetSavings = output.NetSavings;
  }
  if (output.OnDemandCostEquivalent !== undefined) {
    contents.OnDemandCostEquivalent = output.OnDemandCostEquivalent;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansUtilization = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilization => {
  let contents: any = {
    __type: "SavingsPlansUtilization",
    TotalCommitment: undefined,
    UnusedCommitment: undefined,
    UsedCommitment: undefined,
    UtilizationPercentage: undefined
  };
  if (output.TotalCommitment !== undefined) {
    contents.TotalCommitment = output.TotalCommitment;
  }
  if (output.UnusedCommitment !== undefined) {
    contents.UnusedCommitment = output.UnusedCommitment;
  }
  if (output.UsedCommitment !== undefined) {
    contents.UsedCommitment = output.UsedCommitment;
  }
  if (output.UtilizationPercentage !== undefined) {
    contents.UtilizationPercentage = output.UtilizationPercentage;
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansUtilizationAggregates = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationAggregates => {
  let contents: any = {
    __type: "SavingsPlansUtilizationAggregates",
    AmortizedCommitment: undefined,
    Savings: undefined,
    Utilization: undefined
  };
  if (output.AmortizedCommitment !== undefined) {
    contents.AmortizedCommitment = deserializeAws_json1_1SavingsPlansAmortizedCommitment(
      output.AmortizedCommitment,
      context
    );
  }
  if (output.Savings !== undefined) {
    contents.Savings = deserializeAws_json1_1SavingsPlansSavings(
      output.Savings,
      context
    );
  }
  if (output.Utilization !== undefined) {
    contents.Utilization = deserializeAws_json1_1SavingsPlansUtilization(
      output.Utilization,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansUtilizationByTime = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationByTime => {
  let contents: any = {
    __type: "SavingsPlansUtilizationByTime",
    AmortizedCommitment: undefined,
    Savings: undefined,
    TimePeriod: undefined,
    Utilization: undefined
  };
  if (output.AmortizedCommitment !== undefined) {
    contents.AmortizedCommitment = deserializeAws_json1_1SavingsPlansAmortizedCommitment(
      output.AmortizedCommitment,
      context
    );
  }
  if (output.Savings !== undefined) {
    contents.Savings = deserializeAws_json1_1SavingsPlansSavings(
      output.Savings,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  if (output.Utilization !== undefined) {
    contents.Utilization = deserializeAws_json1_1SavingsPlansUtilization(
      output.Utilization,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationDetail => {
  let contents: any = {
    __type: "SavingsPlansUtilizationDetail",
    AmortizedCommitment: undefined,
    Attributes: undefined,
    Savings: undefined,
    SavingsPlanArn: undefined,
    Utilization: undefined
  };
  if (output.AmortizedCommitment !== undefined) {
    contents.AmortizedCommitment = deserializeAws_json1_1SavingsPlansAmortizedCommitment(
      output.AmortizedCommitment,
      context
    );
  }
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1Attributes(
      output.Attributes,
      context
    );
  }
  if (output.Savings !== undefined) {
    contents.Savings = deserializeAws_json1_1SavingsPlansSavings(
      output.Savings,
      context
    );
  }
  if (output.SavingsPlanArn !== undefined) {
    contents.SavingsPlanArn = output.SavingsPlanArn;
  }
  if (output.Utilization !== undefined) {
    contents.Utilization = deserializeAws_json1_1SavingsPlansUtilization(
      output.Utilization,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetails = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlansUtilizationDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context)
  );
};

const deserializeAws_json1_1SavingsPlansUtilizationsByTime = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlansUtilizationByTime> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  let contents: any = {
    __type: "ServiceQuotaExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceSpecification = (
  output: any,
  context: __SerdeContext
): ServiceSpecification => {
  let contents: any = {
    __type: "ServiceSpecification",
    EC2Specification: undefined
  };
  if (output.EC2Specification !== undefined) {
    contents.EC2Specification = deserializeAws_json1_1EC2Specification(
      output.EC2Specification,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TagValues = (
  output: any,
  context: __SerdeContext
): TagValues => {
  let contents: any = {
    __type: "TagValues",
    Key: undefined,
    Values: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Values !== undefined) {
    contents.Values = deserializeAws_json1_1Values(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1TagValuesList = (
  output: any,
  context: __SerdeContext
): Array<TagValues> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagValues(entry, context)
  );
};

const deserializeAws_json1_1TargetInstance = (
  output: any,
  context: __SerdeContext
): TargetInstance => {
  let contents: any = {
    __type: "TargetInstance",
    CurrencyCode: undefined,
    DefaultTargetInstance: undefined,
    EstimatedMonthlyCost: undefined,
    EstimatedMonthlySavings: undefined,
    ExpectedResourceUtilization: undefined,
    ResourceDetails: undefined
  };
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.DefaultTargetInstance !== undefined) {
    contents.DefaultTargetInstance = output.DefaultTargetInstance;
  }
  if (output.EstimatedMonthlyCost !== undefined) {
    contents.EstimatedMonthlyCost = output.EstimatedMonthlyCost;
  }
  if (output.EstimatedMonthlySavings !== undefined) {
    contents.EstimatedMonthlySavings = output.EstimatedMonthlySavings;
  }
  if (output.ExpectedResourceUtilization !== undefined) {
    contents.ExpectedResourceUtilization = deserializeAws_json1_1ResourceUtilization(
      output.ExpectedResourceUtilization,
      context
    );
  }
  if (output.ResourceDetails !== undefined) {
    contents.ResourceDetails = deserializeAws_json1_1ResourceDetails(
      output.ResourceDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TargetInstancesList = (
  output: any,
  context: __SerdeContext
): Array<TargetInstance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetInstance(entry, context)
  );
};

const deserializeAws_json1_1TerminateRecommendationDetail = (
  output: any,
  context: __SerdeContext
): TerminateRecommendationDetail => {
  let contents: any = {
    __type: "TerminateRecommendationDetail",
    CurrencyCode: undefined,
    EstimatedMonthlySavings: undefined
  };
  if (output.CurrencyCode !== undefined) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.EstimatedMonthlySavings !== undefined) {
    contents.EstimatedMonthlySavings = output.EstimatedMonthlySavings;
  }
  return contents;
};

const deserializeAws_json1_1UnresolvableUsageUnitException = (
  output: any,
  context: __SerdeContext
): UnresolvableUsageUnitException => {
  let contents: any = {
    __type: "UnresolvableUsageUnitException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostCategoryDefinitionResponse => {
  let contents: any = {
    __type: "UpdateCostCategoryDefinitionResponse",
    CostCategoryArn: undefined,
    EffectiveStart: undefined
  };
  if (output.CostCategoryArn !== undefined) {
    contents.CostCategoryArn = output.CostCategoryArn;
  }
  if (output.EffectiveStart !== undefined) {
    contents.EffectiveStart = output.EffectiveStart;
  }
  return contents;
};

const deserializeAws_json1_1UtilizationByTime = (
  output: any,
  context: __SerdeContext
): UtilizationByTime => {
  let contents: any = {
    __type: "UtilizationByTime",
    Groups: undefined,
    TimePeriod: undefined,
    Total: undefined
  };
  if (output.Groups !== undefined) {
    contents.Groups = deserializeAws_json1_1ReservationUtilizationGroups(
      output.Groups,
      context
    );
  }
  if (output.TimePeriod !== undefined) {
    contents.TimePeriod = deserializeAws_json1_1DateInterval(
      output.TimePeriod,
      context
    );
  }
  if (output.Total !== undefined) {
    contents.Total = deserializeAws_json1_1ReservationAggregates(
      output.Total,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UtilizationsByTime = (
  output: any,
  context: __SerdeContext
): Array<UtilizationByTime> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UtilizationByTime(entry, context)
  );
};

const deserializeAws_json1_1Values = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};